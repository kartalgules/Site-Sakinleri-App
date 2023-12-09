/* eslint-disable react/prop-types */
import { createContext } from "react";
import { auth } from "../firebase";

const FirebaseContext = createContext();

export const FirebaseProvider = ({children}) => {
    return (
        <FirebaseContext.Provider value = {auth}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseContext;