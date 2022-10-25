import {LOAD_ANSWER, LOAD_BUTTONS, LOAD_CLEAR, LOAD_BACKSPACE} from './calActionTypes'


export const loadButtons = (number) =>{
    return{
        type: LOAD_BUTTONS,
        payload:number
    }
}

export const loadAnswer = (number) =>{
    return{
        type:LOAD_ANSWER,
        payload:number
    }
}

export const loadClear = (number) =>{
    return{
        type:LOAD_CLEAR,
        payload:number
    }
}

export const loadBackspace = (number) =>{
    return{
        type:LOAD_BACKSPACE,
        payload:number
    }
}

