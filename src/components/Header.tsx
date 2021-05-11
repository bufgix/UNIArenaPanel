import React from "react";
import { useHistory } from "react-router-dom";

import * as Icons from "@/components/icons";
import { useStore } from "@/models";

export default function Header() {
  const store = useStore();
  const history = useHistory();

  const logOut = () => {
    store.user.logOut().then(() => history.push("/login"));
  };
  return (
    <header className="text-gray-200 body-font bg-primary">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-white">First Link</a>
          <a className="mr-5 hover:text-white">Second Link</a>
          <a className="mr-5 hover:text-white">Third Link</a>
        </nav>
        <a
          className="flex order-first 
                    lg:order-none lg:w-1/5 title-font 
                    font-medium items-center text-gray-200 
                    lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <Icons.Logo height={60} width={60} />
          <span className="ml-3 text-3xl ">UNI Arena</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button
            onClick={logOut}
            className="inline-flex
                text-gray-900
                items-center bg-gray-100 border-0 py-1 px-3 
                focus:outline-none hover:bg-gray-200 rounded 
                text-base mt-4 md:mt-0"
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}
