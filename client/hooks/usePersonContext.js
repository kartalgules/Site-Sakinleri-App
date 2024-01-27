import { PersonContext } from "../src/context/PersonContext";
import { useContext } from "react";

export const usePersonContext = () => {
  const context = useContext(PersonContext);

  if (!context) {
    throw new Error("It appears that the context was not loaded.");
  }
  return context;
};
