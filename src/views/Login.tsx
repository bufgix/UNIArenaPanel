import React from "react";

import * as Icons from "@/components/icons";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";

function Login() {
  const store = useStore();

  const doLogin = () => {
    store.user.googleLogin();
  };

  return (
    <div className="h-screen bg-primary flex justify-center items-center flex-col">
      <Icons.Logo height={"50%"} width={"50%"} />
      <button
        className="flex items-center justify-center p-3 w-40 bg-white rounded-md  text-primary font-bold hover:opacity-50"
        onClick={doLogin}
      >
        <Icons.Google className="mr-2" width={30} height={30} />
        Giriş yap
      </button>
    </div>
  );
}

export default observer(Login);
