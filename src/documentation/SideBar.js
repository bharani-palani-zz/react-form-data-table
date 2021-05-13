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
      <h3 align="center" className="brand">
        react-form-data-table
      </h3>
      <h4 align="center" className="doc">
        Documentation
      </h4>
      <ul>
        {menus.map((menu, i) => (
          <li key={i} className={splitLocation[1] === menu.href.replace("/","") ? "active" : ""}>
            <Link to={`${menu.href}`}>{menu.label}</Link>
          </li>
        ))}
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
