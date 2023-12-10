import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateCurrentUser,
  signInWithEmailAndPassword
} from "firebase/auth";
// import {Firestore} from "firebase/firestore"

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = Firestore(app);
export const singUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth, { displayName: name });
};

export const singIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
