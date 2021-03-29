import { types, Instance, flow, toGenerator } from "mobx-state-tree";
import { FirebaseAuth, GoogleProvider } from "@/firebase";

export const User = types
  .model({
    nickname: types.optional(types.string, ""),
    level: types.optional(types.number, 0),
    /* googleData: types.maybeNull(types.frozen<FirebaseAuthTypes.User>()), */
  })
  .actions((self) => {
    return {
      googleLogin: flow(function* () {
        const { user } = yield* toGenerator(
          FirebaseAuth.signInWithPopup(GoogleProvider)
        );
        console.log(user?.displayName);
      }),
    };
  });

export type UserType = Instance<typeof User>;
