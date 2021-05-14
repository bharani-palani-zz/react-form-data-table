import React, { useState } from "react";
import { noPagination } from "../../mockData";
import ReactFormDataTable from "../../root/ReactFormDataTable";
// import "code-prettify/styles/desert.css";

const NoPagination = props => {
  const {
    config,
    Table,
    TableAliasRows,
    rowElements,
    data,
    showTooltipFor,
    apiInstance
  } = noPagination;

  return (
    <>
      <div className="overflowHidden">
        <h4 className="heading">Long Table</h4>
        <pre className="code">
        {`
        <ReactFormDataTable
          config={{ footer: { pagination: {} } }}
          data={data}
        />
      `}
        </pre>
        <ReactFormDataTable
          config={{ footer: { pagination: {} } }}
          data={data}
        />
      </div>
    </>
  );
};

export default NoPagination;
