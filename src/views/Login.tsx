import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import cn from "classnames";

import * as Icons from "@/components/icons";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import Loading from "@/components/Loading";

function Login() {
  const store = useStore();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const doLogin = () => {
    setLoading(true);
    store.user
      .googleLogin()
      .then(() => {
        history.push("/home");
        location.reload();
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="h-screen bg-primary flex justify-center items-center flex-col">
      <Icons.Logo height={"50%"} width={"50%"} />
      <button
        className={cn(
          "flex items-center justify-center p-3 w-40 bg-white rounded-md  text-primary font-bold hover:opacity-50",
          { "bg-gray-300 cursor-not-allowed hover:opacity-100": loading }
        )}
        disabled={loading}
        onClick={doLogin}
      >
        {loading ? (
          <Loading className="mr-2" color="#536DFE" size={30} />
        ) : (
          <Icons.Google className="mr-2" width={30} height={30} />
        )}
        Giriş yap
      </button>
    </div>
  );
}

export default observer(Login);
