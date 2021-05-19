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
    onTableUpdate,
    onAjaxCallBack,
    onReFetchData
  } = props;
  const [toggle, setToggle] = useState(false);
  const [headers, setToggleHeaders] = useState(true);
  const [width, setWidth] = useState(14);
  const [insertData, setInsertData] = useState([]);

  const widthArray = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };

  const onInsertData = () => {
    const arr = [data[data.length-1]];
    setInsertData(arr);
  }
  return (
    <>
      <div className="overflowHidden">
        <div className="infoDiv">
          <h3 className="heading">{name}</h3>
          <button className={`btn`} onClick={() => onInsertData()}>
            Clone Data
          </button>
          <select
            className="dropDown"
            onChange={e => setWidth(Number(e.target.value))}
            defaultValue={width}
          >
            <option value={10}>cellWidth</option>
            {widthArray(10, 20).map((v, i) => (
              <option key={i} defaultValue={v === width} value={v}>
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
          {insertData.length > 0 && (
            <li className="indend">
              insertCloneData=
              {`{${JSON.stringify(insertData)}}`}
            </li>
          )}          <li className="indend">
            theme="
            {`${toggle ? "dark" : "light"}`}"
          </li>
          {width && <li className="indend">cellWidth="{`${width}`}rem"</li>}
          <li className="indend">showHeaders="{`${headers}`}"</li>
          {aliasHeaders && (
            <li className="indend">
              aliasHeaders=
              {`{${JSON.stringify(aliasHeaders)}}`}
            </li>
          )}
          {showTooltipFor && (
            <li className="indend">
              showTooltipFor=
              {`{${JSON.stringify(showTooltipFor)}}`}
            </li>
          )}
          {showTotal && (
            <li className="indend">
              showTotal=
              {`{${JSON.stringify(showTotal)}}`}
            </li>
          )}
          {rowElements && (
            <li className="indend">
              rowElements=
              {`{${JSON.stringify(rowElements)}}`}
            </li>
          )}
          {defaultValues && (
            <li className="indend">
              defaultValues=
              {`{${JSON.stringify(defaultValues)}}`}
            </li>
          )}
          {apiInstance && (
            <li className="indend">
              apiInstance=
              {`{${JSON.stringify(apiInstance)}}`}
            </li>
          )}
          {config && (
            <li className="indend">
              config=
              {`{${JSON.stringify(config)}}`}
            </li>
          )}
          {typeof onTableUpdate === "function" && (
            <li className="indend">
              onTableUpdate={`{(updatedData) => console.log(updatedData)}`}
            </li>
          )}
          {typeof onAjaxCallBack === "function" && (
            <li className="indend">
              onAjaxCallBack={`{(response) => console.log(response)}`}
            </li>
          )}
          {typeof onReFetchData === "function" && (
            <li className="indend">
              onReFetchData=
              {`{(bool) => bool === true && alert("Reload GET API, to reload data table, to update primary or unique key of all rows")}`}
            </li>
          )}
          <li>{`/>`}</li>
        </ol>
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
          onTableUpdate={updatedData => console.log("bbb", updatedData)}
          onAjaxCallBack={response => alert("Ajax callback on success or fail")}
          onReFetchData={bool =>
            bool && alert("Reload API to reload data table")
          }
          insertCloneData={insertData}
        />
        {apiInstance && (
          <>
            <h4>
              <em>Note</em>
            </h4>
            <ol className="code">
              <li>
                "rowElements" props with array of element type is required. If
                not set, ajax wont work. Instead empty payload will get
                submitted.
              </li>
              <li>
                "defaultValues" props with array of objects is required, while
                adding new row elements with default value.
              </li>
              <li>
                While updating each element in form, "onTableUpdate" callback
                returns updated form data.
              </li>
              <li>
                While saving data via AJAX, during on success or on fail, the
                "onAjaxCallBack" returns response data from API, which can be
                used for alertMessage() or doSomething()
              </li>
              <li>
                <b>
                  <em>Important:</em>
                </b>{" "}
                Please use "onReFetchData" callback to reload data table from
                your backend.
                <br />
                This helps to update all primary or unique keys for newly added
                row(s).
              </li>
              <li>
                <b>
                  <em>Important:</em>
                </b>{" "}
                Your primary key object should always be present in the first
                position of the array.
                <br />
                Ex: It should be {`[{id: 10001, name: "John"}]`} not{" "}
                {`[{name: "John", id: 10001}]`}. Meaning, your first column is
                your identifier. If its not set correctly, your table update
                wont work.
              </li>
            </ol>
          </>
        )}
      </div>
    </>
  );
};

export default DemoDataTable;
