import React, { useState } from "react";
import { aliasHeaders } from "../../mockData";
import ReactFormDataTable from "../../root/ReactFormDataTable";
// import "code-prettify/styles/desert.css";

const AliasHeaders = props => {
  const {
    config,
    Table,
    TableRows,
    TableAliasRows,
    rowElements,
    data,
    showTooltipFor,
    apiInstance
  } = aliasHeaders;

  return (
    <>
      <div className="overflowHidden">
        <h4 className="heading">Long Table</h4>
        <pre className="code">
          {`
        <ReactFormDataTable
          TableAliasRows={[ "Name", "DOB", "Gender", "Salary" ]}
          data={data}
        />
        `}
        </pre>
        <ReactFormDataTable
          TableAliasRows={["Name", "DOB", "Gender", "Salary"]}
          data={data}
        />
      </div>
    </>
  );
};

export default AliasHeaders;
