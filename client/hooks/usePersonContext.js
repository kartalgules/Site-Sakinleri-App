import { PersonContext } from "../src/context/personContext";
import { useContext } from "react";

export const usePersonContext = () => {
    const context = useContext(PersonContext);

    if(!context) {
        throw new Error('context yüklenmedi')
    }

    return context;
}