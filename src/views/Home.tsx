import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Header } from "@/components";

function Home() {
  let { path } = useRouteMatch();

  return (
    <>
      <Header />
      <Switch>
        <Route path={`${path}/new`}>
          <h1>new questin</h1>
        </Route>
      </Switch>
    </>
  );
}

export default observer(Home);
