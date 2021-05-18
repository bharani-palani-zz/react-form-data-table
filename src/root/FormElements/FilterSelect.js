import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import HtmlIcon from "./HtmlIcon";
import Checkbox from "./Checkbox";

const FilterSelect = props => {
  const {
    index,
    type,
    primaryKey,
    searchable,
    element,
    value: defaultValueOrArray,
    onChange
  } = props;
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);

  const selectNull = () => {
    // return backupList.filter(v => v.id === null)[0].value;
    return "Select";
  };

  // let selectedValueOrArray = [58]; // use this for documentation [84, 58, 81]
  let selectedValueOrArray = defaultValueOrArray; // need this
  const backupList = element.multiChoice.dropDownList;
  if (type === "single") {
    selectedValueOrArray =
      backupList.length > 0 &&
      backupList.filter(b => b.id === defaultValueOrArray);
    selectedValueOrArray =
      selectedValueOrArray.length > 0
        ? selectedValueOrArray[0].value
        : selectNull();
  } else {
    selectedValueOrArray =
      typeof selectedValueOrArray === "object" &&
      selectedValueOrArray.length > 0
        ? selectedValueOrArray.map(v => v.toString())
        : [];
  }

  const massagedList = backupList.map(d => {
    d.checked = d.id && selectedValueOrArray.includes(d.id.toString());
    return d;
  });
  const list = type === "single" ? backupList : massagedList;
  const [dropDownList, setDropDownList] = useState(list);
  const [selected, setSelected] = useState(selectedValueOrArray);
  const [searchValue, setSearchValue] = useState("");
  const [checkedItems, setCheckedItems] = useState(selectedValueOrArray);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    !toggle && type === "multiple" && onChange(index, checkedItems, primaryKey);
  },[toggle]);

  useEffect(() => {
    if (type === "multiple") {
      setSelected(getMoreString(selectedValueOrArray));
    }
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const onSetSelected = info => {
    onChange(index, info.id, primaryKey);
    setSelected(info.value);
    type === "single" && setToggle(false);
  };

  const onSearch = async newVal => {
    setSearchValue(newVal);
    const newList = backupList
      .filter(b =>
        b.value
          .toString()
          .toLowerCase()
          .includes(newVal.toString().toLowerCase())
      )
      .map(b =>
        checkedItems.includes(b.id)
          ? { ...b, checked: true }
          : { ...b, checked: false }
      );
    await setDropDownList(newList);
  };

  const onDismiss = e => {
    setSearchValue("");
    onSearch("");
  };

  const getMoreString = sList => {
    let firstValue =
      sList.length > 0 && backupList.filter(b => b.id === sList[0]);
    if (firstValue.length === 1) {
      firstValue = firstValue[0].value;
      const selString =
        sList.length > 1
          ? `${firstValue} + ${sList.length - 1} more...`
          : firstValue;
      return selString;
    } else {
      return selectNull();
    }
  };
  const onCheckBoxChange = (e, info) => {
    const {
      target: { checked }
    } = e;
    let sList =
      info.id && checked
        ? [...checkedItems, info.id]
        : checkedItems.filter(c => c !== info.id);
    sList = [...new Set(sList)];
    // new way of updating array object values on condition
    const newDropDownList = dropDownList.map(b =>
      sList.includes(b.id) ? { ...b, checked: true } : { ...b, checked: false }
    );
    setDropDownList(newDropDownList);
    setCheckedItems(sList);
    setSelected(getMoreString(sList));
  };

  return (
    <div ref={ref} className={`filterSelectComponent`}>
      <div
        onClick={() => setToggle(!toggle)}
        className={`selected ${toggle ? "yes" : "no"}`}
      >
        <div className="string" title={selected}>
          {selected}
        </div>
        <div>
          <HtmlIcon
            className={`caretIcon ${toggle ? "down" : "up"}`}
            entity={"&#9662;"}
          />
        </div>
      </div>
      {toggle && (
        <div className="wrapper">
          {searchable && (
            <div className="searchContent">
              <input
                className="inputText"
                onChange={e => onSearch(e.target.value)}
                placeholder="Search"
                type="text"
                value={searchValue}
              />
              {searchValue && (
                <HtmlIcon
                  onClick={onDismiss}
                  className={`icon`}
                  entity={"&#10006;"}
                />
              )}
            </div>
          )}
          <div className="listWrapper">
            <ul>
              {dropDownList.length > 0 ? dropDownList.map((d, i) => (
                <li className={(d.id && (d.id === defaultValueOrArray || checkedItems.includes(d.id))) ? "selectedSingle" : ""} key={i}>
                  {type === "multiple" ? (
                    <Checkbox
                      key={i}
                      onChange={e => onCheckBoxChange(e, d)}
                      checked={d.checked}
                      info={d}
                    />
                  ) : (
                    <div onClick={() => onSetSelected(d)}>{d.value}</div>
                  )}
                </li>
              )) : (<li className="textCenter">No results</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

FilterSelect.propTypes = {
  type: PropTypes.string,
  searchable: PropTypes.bool,
  index: PropTypes.object,
  primaryKey: PropTypes.string,
  element: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  onChange: PropTypes.func
};
FilterSelect.defaultProps = {
  type: "single",
  searchable: true
};

export default FilterSelect;
