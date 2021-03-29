import React from "react";
import { observer } from "mobx-react-lite";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { useStore } from "@/models";

type Props = RouteProps & {
  redirectPath?: string;
};

function GuardedRoute({ redirectPath = "/login", ...rest }: Props) {
  const store = useStore();

  if (store.user.isAuthenticated) {
    return <Route {...rest} />;
  } else {
    return <Redirect to={{ pathname: redirectPath }} />;
  }
}

export default observer(GuardedRoute);
