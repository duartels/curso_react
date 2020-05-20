import {NUM_MIN_CHANGE, NUM_MAX_CHANGE} from './actionTypes'


export function changeMinNumber(newNumber){
    return{
        type: NUM_MIN_CHANGE,
        payload: newNumber
    }
}

export function changeMaxNumber(newNumber){
    return{
        type: NUM_MAX_CHANGE,
        payload: newNumber
    }
}