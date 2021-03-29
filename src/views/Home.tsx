import React from "react";
import { useHistory } from "react-router-dom";

import { useStore } from "@/models";
import { observer } from "mobx-react-lite";

function Home() {
  const store = useStore();
  const history = useHistory();

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => store.user.logOut().then(() => history.push("/login"))}
      >
        logput
      </button>
    </div>
  );
}

export default observer(Home);
