/* eslint-disable react/prop-types */
import { createContext } from "react";
import { auth , db } from "../firebase";

const FirebaseContext = createContext();
const value = {
    auth,
    db
};

export const FirebaseProvider = ({children}) => {
    return (
        <FirebaseContext.Provider value = {value}>
            {children}
        </FirebaseContext.Provider>
    )
};

export default FirebaseContext;