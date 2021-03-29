import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginScreen from "@/views/Login";
import HomeScreen from "@/views/Home";
import GuardedRoute from "@/GuardedRoute";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/login" />;
        }}
      />
      <Route path="/login" exact component={LoginScreen} />
      <GuardedRoute path="/home" component={HomeScreen} />
    </Switch>
  );
}

export default App;
