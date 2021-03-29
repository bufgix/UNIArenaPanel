import React from "react";

import { useStore } from "@/models";
import { observer } from "mobx-react-lite";

function Login() {
  const store = useStore();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => store.user.googleLogin()}>Google login</button>
    </div>
  );
}

export default observer(Login);
