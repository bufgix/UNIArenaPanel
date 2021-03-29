import { createContext, useContext } from "react";
import { types, Instance } from "mobx-state-tree";
import { User } from "./user";

const RootStore = types.model({
  user: types.optional(User, {}),
});

export const initStore = () => {
  return RootStore.create({});
};

export type RootStoreType = Instance<typeof RootStore>;
const RootStoreContext = createContext<null | RootStoreType>(null);
export const StoreProvider = RootStoreContext.Provider;
export default RootStore;

export function useStore(): RootStoreType {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error("Store is not provided");
  }
  return store;
}
