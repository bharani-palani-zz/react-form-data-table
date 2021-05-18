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
              value={value}
              onChange={value => {
                onChange(index, value, primaryKey);
              }}
            />
          );
        case "dateTime":
          return (
            <DateTimeSelector
              value={value}
              type={"dateTime"}
              onChange={value => {
                onChange(index, value, primaryKey);
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
