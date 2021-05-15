import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { menus } from "./menuComponent";
import { useLocation } from "react-router-dom";

const SideBar = props => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="sideBar">
      <h4 align="center">
        <Link to="/react-form-data-table" className="brand">{`<ReactFormDataTable />`}</Link>
      </h4>
      <h5 align="center" className="doc">
        Documentation
      </h5>
      <ul>
        {menus.map((menu, i) => {
          return <li key={i} className={`${splitLocation[1]}/${splitLocation[2]}` === menu.href.replace("/","") ? "active" : ""}>
            <Link to={`${menu.href}`}>{menu.label}</Link>
          </li>
        })}
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  property: PropTypes.string
};
SideBar.defaultProps = {
  property: "String name"
};

export default SideBar;
