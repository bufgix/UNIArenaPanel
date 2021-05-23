import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const config = {
  apiKey: import.meta.env.VITE_FB_AUTH_KEY,
  authDomain: "uniarena-b8d07.firebaseapp.com",
  databaseURL: "https://uniarena-b8d07-default-rtdb.firebaseio.com",
  projectId: "uniarena-b8d07",
  storageBucket: "uniarena-b8d07.appspot.com",
  messagingSenderId: "535420584234",
  appId: "1:535420584234:web:3685e2d4a79e7c95311e53",
  measurementId: "G-TYEZ2XM9N2",
};

firebase.initializeApp(config);

export default firebase;
export const FirebaseAuth = firebase.auth();
export const FirebaseFirestore = firebase.firestore();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
