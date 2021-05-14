import React, { useState } from "react";
import { aliasHeaders } from "../../mockData";
import ReactFormDataTable from "../../root/ReactFormDataTable";
// import "code-prettify/styles/desert.css";

const LongTable = props => {
  const {
    config,
    Table,
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
          data={data}
        />
        `}
        </pre>
        <ReactFormDataTable
          TableAliasRows={TableAliasRows}
          data={data}
        />
      </div>
    </>
  );
};

export default LongTable;
