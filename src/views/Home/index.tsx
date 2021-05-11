import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Header } from "@/components";
import NewQuestion from "./NewQuestion";

function Home() {
  let { path } = useRouteMatch();

  return (
    <>
      <Header />
      <Switch>
        <Route path={`${path}/new`}>
          <NewQuestion />
        </Route>
      </Switch>
    </>
  );
}

export default observer(Home);
