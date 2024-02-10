import { createContext,useReducer } from "react";

//  Person Context Created
export const PersonContext = createContext();

//  The methods for states and actions in the person reducer were created
export const PersonReducer = (state,action) => {
    switch(action.type){
        case 'PERSON_CREATE':
            return  {
                persons:[action.payload,...state.persons]
            }
        case 'PERSONS_GET':
            return {
                persons:action.payload
            }
        default:
            return state
    }
}

//  Person Context Provider Created
export const PersonContextProvider = ({children}) => {

    const [state,dispatch]=useReducer(PersonReducer,{
        persons:null
    })

    return(
        <PersonContextProvider value={{...state,dispatch}}>
            {children}
        </PersonContextProvider>
    )
}