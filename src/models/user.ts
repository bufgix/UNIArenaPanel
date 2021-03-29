import { types, Instance, flow, toGenerator } from "mobx-state-tree";
import firebase, { FirebaseAuth, GoogleProvider } from "@/firebase";

export const User = types
  .model({
    googleData: types.maybeNull(types.frozen<firebase.auth.UserCredential>()),
  })
  .actions((self) => {
    return {
      googleLogin: flow(function* () {
        try {
          const data = yield* toGenerator(
            FirebaseAuth.signInWithPopup(GoogleProvider)
          );
          self.googleData = data;
        } catch (error) {
          console.error(error);
        }
      }),
      logOut: flow(function* () {
        yield FirebaseAuth.signOut();
        self.googleData = null;
      }),
    };
  })
  .views((self) => ({
    get isAuthenticated() {
      return self.googleData ? true : false;
    },
  }));

export type UserType = Instance<typeof User>;
