import * as actionTypes from './action-types';

export const buildingActions = (dispatch)=>{

    return {
        increase: ()=> dispatch({type: actionTypes.INCREASE}),
        decrease: ()=> dispatch({type: actionTypes.DECREASE}),
        reset: ()=> dispatch({type: actionTypes.RESET}),
        setCounter: (value)=> dispatch({type: actionTypes.SET_COUNTER, payload: { counter: value}})
    }
}