import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { menus } from "./menuComponent";
import SimpleDataTable from "./tables/SimpleDataTable";

class Wrapper extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SimpleDataTable} />
        {menus.map((menu, i) => {
          return (
            <Route key={i} exact path={menu.href} component={menu.component} />
          );
        })}
        <Route path="*" component={SimpleDataTable} />
      </Switch>
    );
  }
}

export default withRouter(Wrapper);
