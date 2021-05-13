import React, { useState } from "react";
import { simpleTable } from "../../mockData";
import ReactFormDataTable from "../../root/ReactFormDataTable";

const SimpleDataTable = props => {
  const [toggle, setToggle] = useState(false);
  const {
    config,
    Table,
    TableRows,
    TableAliasRows,
    rowElements,
    dbData,
    showTooltipFor,
    apiInstance
  } = simpleTable;

  return (
    <>
      <div className="overflowHidden">
        <h3 className="heading">Simple Data Table</h3>
        <pre className="code">
          {`
        <ReactFormDataTable
          data={data}
          theme={${!toggle ? "dark" : "light"}}
          cellWidth="18rem"
        />
        `}
        </pre>
        <div className="infoDiv">
            <div />
            <button className="btn" onClick={() => setToggle(!toggle)}>Toggle Theme</button>
        </div>
        <ReactFormDataTable
          data={dbData}
          theme={!toggle ? "dark" : "light"}
          cellWidth="18rem"
        />
      </div>
    </>
  );
};

export default SimpleDataTable;
