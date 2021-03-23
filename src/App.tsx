import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginScreen from "./views/Login";
import HomeScreen from "./views/Home";

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
      <Route path="/home" component={HomeScreen} />
    </Switch>
  );
}

export default App;
