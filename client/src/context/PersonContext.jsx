import { createContext,useReducer } from "react";

export const PersonContext = createContext();

export const PersonReducer = (state,action) => {
    switch(action.type){
        case 'PERSON_CREATE':
            return  {
                persons:[action.payload,...state.persons]
            }
        // case 'PERSON':
        //     return {
        //         persons:action.payload
        //     }
        default:
            return state
    }
}

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