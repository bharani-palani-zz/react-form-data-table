import React from "react";
import { Router } from "react-router";
import history from "../history";
import SideBar from "./SideBar";
import Wrapper from "./Wrapper";
import "./Documentation.scss";

const Documentation = props => {
  return (
    <div className="documentation">
      <div className="body">
        <Router history={history}>
          <SideBar />
          <Wrapper />
        </Router>
      </div>
    </div>
  );
};

export default Documentation;
