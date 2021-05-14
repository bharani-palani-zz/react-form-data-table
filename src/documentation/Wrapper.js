import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { menus } from "./menuComponent";
import DemoDataTable from "./tables/DemoDataTable";

const Wrapper = props => {
  return (
    <Switch>
      {/* <Route
        exact
        path="/"
        component={() => <DemoDataTable data={sampleData} />}
      /> */}
      {menus.map((menu, i) => {
        return (
          <Route
            key={i}
            exact
            path={menu.href}
            component={() => (
              <DemoDataTable
                aliasHeaders={menu.aliasHeaders}
                data={menu.data}
                config={menu.config}
              />
            )}
          />
        );
      })}
      {/* <Route path="*" component={() => <DemoDataTable data={sampleData} />} /> */}
    </Switch>
  );
};

export default withRouter(Wrapper);
