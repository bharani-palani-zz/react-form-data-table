import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { menus } from "./menuComponent";
import DemoDataTable from "./tables/DemoDataTable";

const Wrapper = props => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <DemoDataTable
            name="Simple Data Table"
            aliasHeaders={menus[0].aliasHeaders}
            data={menus[0].data}
            config={menus[0].config}
          />
        )}
      />
      {menus.map((menu, i) => {
        return (
          <Route
            key={i}
            exact
            path={menu.href}
            component={() => (
              <DemoDataTable
                name={menu.label}
                aliasHeaders={menu.aliasHeaders}
                data={menu.data}
                config={menu.config}
                showTooltipFor={menu.showTooltipFor}
                showTotal={menu.showTotal}
                rowElements={menu.rowElements}
                defaultValues={menu.defaultValues}
                apiInstance={menu.apiInstance}
                onTableUpdate={menu.onTableUpdate}
                onAjaxCallBack={menu.onAjaxCallBack}
                onReFetchData={menu.onReFetchData}
              />
            )}
          />
        );
      })}
      <Route
        path="*"
        component={() => (
          <DemoDataTable
            name="Simple Data Table"
            aliasHeaders={menus[0].aliasHeaders}
            data={menus[0].data}
            config={menus[0].config}
          />
        )}
      />
    </Switch>
  );
};

export default withRouter(Wrapper);
