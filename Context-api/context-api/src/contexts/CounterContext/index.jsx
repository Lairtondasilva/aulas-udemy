import { createContext, useContext, useReducer, useRef, useState } from "react";
import P from 'prop-types'
import { reducer } from "./reducer";
import { buildingActions } from "./buildingActions";

export const initialState = {
    counter: 0,
    isLoading: false
}

const counterContext = createContext();

export const CounterContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useRef(buildingActions(dispatch));

    return(
        <counterContext.Provider value={[state, actions.current]}>
            {children}
        </counterContext.Provider>
    )
}

export const useCounterContext = ()=>{
    const context = useContext(counterContext);
    

    if(typeof context === 'undefined'){
        throw new Error("You have to use useCounterContext inside <CounterContextProvider/>")
    }

    return [context[0], context[1]]
}

CounterContextProvider.propTypes = {
    children: P.node.isRequired,
}