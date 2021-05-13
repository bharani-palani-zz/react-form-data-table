import React, { useState } from "react";
import { noPagination } from "../../mockData";
import ReactFormDataTable from "../../root/ReactFormDataTable";
// import "code-prettify/styles/desert.css";

const NoPagination = props => {
  const {
    config,
    Table,
    TableRows,
    TableAliasRows,
    rowElements,
    data,
    showTooltipFor,
    apiInstance
  } = noPagination;

  return (
    <>
      <div className="overflowHidden">
        <h3 className="heading">Long Table</h3>
        <pre className="code">
        {`
        <ReactFormDataTable
          config={{ footer: { pagination: {} } }}
          data={data}
          theme="dark"
        />
      `}
        </pre>
        <ReactFormDataTable
          config={{ footer: { pagination: {} } }}
          data={data}
          theme="dark"
        />
      </div>
    </>
  );
};

export default NoPagination;
