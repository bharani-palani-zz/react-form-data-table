import React, { useState } from "react";
import ReactFormDataTable from "../../root/ReactFormDataTable";

const DemoDataTable = props => {
  const { data, aliasHeaders, config } = props;
  const [toggle, setToggle] = useState(false);
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
          <div className="heading">Simple Data Table</div>
          <select
            className="dropDown"
            onChange={e => setWidth(Number(e.target.value))}
          >
            <option value={10}>Select</option>
            {widthArray(10, 20).map(v => (
              <option selected={v === width} value={v}>
                {v}
              </option>
            ))}
          </select>
          <button className="btn" onClick={() => setToggle(!toggle)}>
            Toggle Theme
          </button>
        </div>
        <pre className="code">
          {`
        <ReactFormDataTable
          data={}
          theme={${toggle ? "dark" : "light"}}
          cellWidth={${width}rem}
        />
        `}
        </pre>
        <ReactFormDataTable
          data={data}
          theme={toggle ? "dark" : "light"}
          cellWidth={`${width}rem`}
          aliasHeaders={aliasHeaders}
          config={config}
        />
      </div>
    </>
  );
};

export default DemoDataTable;
