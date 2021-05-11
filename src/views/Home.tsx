import React from "react";
import { useHistory } from "react-router-dom";

import { useStore } from "@/models";
import { Header } from "@/components";
import { observer } from "mobx-react-lite";

function Home() {
  return (
    <>
      <Header />
    </>
  );
}

export default observer(Home);
