
const initialState ={
    tempData : '',
}

export const rootReducer = (state=initialState,  action) =>{
   console.log(action.payload);
    switch (action.type) {
        case "TEMP_IN_CITY":
        return{
            ...state,
            tempData : state.tempData = action.payload,             
        }       
        default: return state;
        
    }
    
}
