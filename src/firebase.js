import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth } from "firebase/auth";
// import {Firestore} from "firebase/firestore"

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = Firestore(app);
