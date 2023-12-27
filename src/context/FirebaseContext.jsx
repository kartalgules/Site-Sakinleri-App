import { createContext } from "react";
import { auth } from "../firebase";

const FirebaseContext = createContext();
const value = {
    auth
};

export const FirebaseProvider = ({children}) => {
    return (
        <FirebaseContext.Provider value = {value}>
            {children}
        </FirebaseContext.Provider>
    )
};

export default FirebaseContext;