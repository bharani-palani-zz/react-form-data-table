import React, { useState } from "react";
import ReactFormDataTable from "../../root/ReactFormDataTable";

const DemoDataTable = props => {
  const {data} = props;
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="overflowHidden">
        <div className="infoDiv">
          <h4 className="heading">Simple Data Table</h4>
          <button className="btn" onClick={() => setToggle(!toggle)}>
            Toggle Theme
          </button>
        </div>
        <pre className="code">
          {`
        <ReactFormDataTable
          data={data}
          theme={${!toggle ? "dark" : "light"}}
          cellWidth="18rem"
        />
        `}
        </pre>
        <ReactFormDataTable
          data={data}
          theme={toggle ? "dark" : "light"}
          cellWidth="18rem"
        />
      </div>
    </>
  );
};

export default DemoDataTable;
