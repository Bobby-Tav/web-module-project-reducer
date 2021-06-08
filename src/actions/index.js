export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

//Memory
export const MEMORY_SAVED = 'MEMORY_SAVED';
export const USE_MEMORY = 'USE_MEMORY';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) =>{
    return({type:CHANGE_OPERATION,payload:operator})
}

export const clearDisplay= () =>{
    return({type:CLEAR_DISPLAY})
} 

export const saveMemory = () =>{
    return({type:MEMORY_SAVED})
}

export const memoryUse = () =>{
    return({type:USE_MEMORY})
}
export const clearMemory = () =>{
    return({type:CLEAR_MEMORY})
} 

