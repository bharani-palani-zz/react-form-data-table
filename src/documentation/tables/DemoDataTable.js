import React, { useState } from "react";
import ReactFormDataTable from "../../root/ReactFormDataTable";

const DemoDataTable = props => {
  const {
    name,
    data,
    aliasHeaders,
    config,
    showTooltipFor,
    showTotal,
    rowElements,
    defaultValues,
    apiInstance,
    onTableUpdate
  } = props;
  const [toggle, setToggle] = useState(false);
  const [headers, setToggleHeaders] = useState(true);
  const [width, setWidth] = useState(14);
  const widthArray = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };
  return (
    <>
      <div className="overflowHidden">
        <div className="infoDiv">
          <h3 className="heading">{name}</h3>
          <select
            className="dropDown"
            onChange={e => setWidth(Number(e.target.value))}
          >
            <option value={10}>cellWidth</option>
            {widthArray(10, 20).map(v => (
              <option selected={v === width} value={v}>
                {v}
              </option>
            ))}
          </select>
          <button
            className={`btn ${!headers ? "active" : ""}`}
            onClick={() => setToggleHeaders(!headers)}
          >
            Toggle Headers
          </button>
          <button
            className={`btn ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            Toggle Theme
          </button>
        </div>
        <ol className="code">
          <li>{`<ReactFormDataTable`}</li>
          <li className="indend">
            data=
            {`{${JSON.stringify(data).substring(0, 50)} ... ${JSON.stringify(
              data
            ).substr(-50)}}`}
          </li>
          <li className="indend">
            <b className="asterisk">* </b>theme="
            {`${toggle ? "dark" : "light"}`}"
          </li>
          {width && (
            <li className="indend">
              <b className="asterisk">* </b>cellWidth="{`${width}`}rem"
            </li>
          )}
          {aliasHeaders && (
            <li className="indend">
              <b className="asterisk">* </b>aliasHeaders=
              {`{${JSON.stringify(aliasHeaders)}}`}
            </li>
          )}
          {showTooltipFor && (
            <li className="indend">
              <b className="asterisk">* </b>showTooltipFor=
              {`{${JSON.stringify(showTooltipFor)}}`}
            </li>
          )}
          {showTotal && (
            <li className="indend">
              <b className="asterisk">* </b>showTotal=
              {`{${JSON.stringify(showTotal)}}`}
            </li>
          )}
          {rowElements && (
            <li className="indend">
              <b className="asterisk">* </b>rowElements=
              {`{${JSON.stringify(rowElements)}}`}
            </li>
          )}
          {defaultValues && (
            <li className="indend">
              <b className="asterisk">* </b>defaultValues=
              {`{${JSON.stringify(defaultValues)}}`}
            </li>
          )}
          {apiInstance && (
            <li className="indend">
              <b className="asterisk">* </b>apiInstance=
              {`{${JSON.stringify(apiInstance)}}`}
            </li>
          )}
          {config && (
            <li className="indend">
              <b className="asterisk">* </b>config=
              {`{${JSON.stringify(config)}}`}
            </li>
          )}
          {typeof onTableUpdate === "function" && (
            <li className="indend">
              <b className="asterisk">* </b>onTableUpdate={`{(data) => console.log(data)}`}
            </li>
          )}
          <li className="indend">
            <b className="asterisk">* </b>showHeaders="{`${headers}`}"
          </li>
          <li>{`/>`}</li>
        </ol>
        <div className="note">Fields marked in asterisk(*) are optional</div>
        <ReactFormDataTable
          data={data}
          theme={toggle ? "dark" : "light"}
          cellWidth={`${width}rem`}
          aliasHeaders={aliasHeaders}
          config={config}
          showHeaders={headers}
          showTooltipFor={showTooltipFor}
          showTotal={showTotal}
          rowElements={rowElements}
          defaultValues={defaultValues}
          apiInstance={apiInstance}
          onTableUpdate={data => console.log(data)}
        />
      </div>
    </>
  );
};

export default DemoDataTable;
