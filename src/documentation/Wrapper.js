import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { menus } from "./menuComponent";
import DemoDataTable from "./tables/DemoDataTable";
import sampleData from "../mockData";

class Wrapper extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={DemoDataTable} />
        {menus.map((menu, i) => {
          return (
            <Route key={i} exact path={menu.href} component={() => <DemoDataTable data={sampleData} />} />
          );
        })}
        <Route path="*" component={DemoDataTable} />
      </Switch>
    );
  }
}

export default withRouter(Wrapper);
