import { AuthContext } from "../src/context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('Auth Context could not be created.')
    }
    return context;
}