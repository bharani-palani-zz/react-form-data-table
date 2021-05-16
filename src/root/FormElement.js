import React, { useState } from "react";
import Radio from "./FormElements/Radio";
import HtmlIcon from "./FormElements/HtmlIcon";
import FilterSelect from "./FormElements/FilterSelect";
import DateTimeSelector from "./FormElements/DateTimeSelector";

function FormElement(props) {
  const {
    isPostable,
    index,
    value,
    element,
    primaryKey,
    onChange,
    placeholder,
    showDecrement,
    showIncrement,
    onDelete,
    onAddRow,
    ...rest
  } = props;
  const [date, setDate] = useState(new Date(value));

  const objectToDate = date => {
    const [YYYY, MM, DD] = [
      date.getFullYear(),
      date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
      date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    ];
    const dateString = `${YYYY}-${MM}-${DD}`;
    return dateString;
  };

  const objectToDateTime = dt => {
    let [YYYY, MM, DD, hh, mm, ss] = [
      dt.getFullYear(),
      dt.getMonth() + 1 > 9 ? dt.getMonth() + 1 : `0${dt.getMonth() + 1}`,
      dt.getDate() > 9 ? dt.getDate() : `0${dt.getDate()}`,
      dt.getHours(),
      dt.getMinutes(),
      dt.getSeconds()
    ];
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;
    const dateString = `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
    return dateString;
  };

  let [dateTime, setDatetime] = useState(new Date(value));

  if (element === "date") {
    if (isNaN(Date.parse(date))) {
      let today = new Date();
      today = objectToDate(today);
      const date = new Date(today);
      setDate(date);
      setTimeout(() => {
        onChange(index, today);
      }, 100);
    }
  }

  if (element === "dateTime") {
    if (isNaN(Date.parse(dateTime))) {
      let today = new Date();
      today = objectToDateTime(today);
      dateTime = new Date(today);
      setDatetime(dateTime);
      setTimeout(() => {
        onChange(index, today);
      }, 100);
    }
  }

  const renderElement = (index, element, value, primaryKey) => {
    if (typeof element === "string") {
      switch (element) {
        case "textbox":
          return (
            <div className="inputTextWrapper">
              <input
                type="text"
                placeholder={placeholder}
                onBlur={e => onChange(index, e.target.value, primaryKey)}
                className="inputText"
                defaultValue={value}
                {...rest}
              />
            </div>
          );
        case "number":
          return (
            <div className="inputTextWrapper">
              <input
                type="number"
                placeholder={placeholder}
                onBlur={e => onChange(index, e.target.value, primaryKey)}
                className="inputText"
                defaultValue={value}
                {...rest}
              />
            </div>
          );
        case "textarea":
          return (
            <div className="inputTextWrapper">
              <textarea
                placeholder={placeholder}
                onBlur={e => onChange(index, e.target.value, primaryKey)}
                rows="3"
                className="inputText"
                defaultValue={value}
                {...rest}
              />
            </div>
          );
        case "label":
          return (
            <div className="defaultLabel" {...rest}>
              {value}
            </div>
          );
        case "checkbox":
          return isPostable ? (
            <div className="addRemove">
              {showDecrement && (
                <HtmlIcon
                  onClick={() => onDelete(index)}
                  className="error"
                  entity={"&#215;"}
                />
              )}
              {showIncrement && (
                <div
                  className={
                    showDecrement === false ? "floatLeft" : "floatRight"
                  }
                >
                  <HtmlIcon
                    onClick={() => onAddRow(true)}
                    className="success tilt-45"
                    entity={"&#215;"}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="defaultLabel" {...rest}>
              {value}
            </div>
          );
        case "date":
          return (
            <DateTimeSelector
              value={date}
              onChange={value => {
                setDate(value);
                onChange(index, objectToDate(value), primaryKey);
              }}
            />
          );
        case "dateTime":
          return (
            <DateTimeSelector
              value={date}
              type={"dateTime"}
              onChange={value => {
                setDate(value);
                onChange(index, objectToDateTime(value), primaryKey);
              }}
            />
          );
        default:
          return (
            <div className="defaultLabel" {...rest}>
              {value}
            </div>
          );
      }
    } else if (typeof element === "object") {
      const firstKey = Object.keys(element)[0];
      switch (firstKey) {
        case "multiChoice":
          return (
            <FilterSelect
              index={index}
              primaryKey={primaryKey}
              onChange={(ind, val, pKey) => onChange(ind, val, pKey)}
              element={element}
              value={value}
              type={Array.isArray(value) ? "multiple" : "single"}
              searchable={element.searchable}
            />
          );
        case "radio":
          return (
            <Radio
              key={`${index.i}-${index.j}`}
              index={index}
              primaryKey={primaryKey}
              onChange={(ind, val, pKey) => onChange(ind, val, pKey)}
              element={element}
              value={value}
            />
          );
        default:
          return (
            <div className="defaultLabel" {...rest}>
              {value}
            </div>
          );
      }
    }
  };

  return <>{renderElement(index, element, value, primaryKey)}</>;
}

export default FormElement;