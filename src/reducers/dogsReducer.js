import { types } from "../types/types";

const initialState = {
   dataDogs:[]
}
export const dogsReducer = ( state = initialState, action ) => {


    switch (action.type) {
        case types.DogsCargarData:
            return {
                ...state,
                dataDogs:action.payload, 
                }
        case types.DogsAgregarNuevo:
            return {
                ...state,
                dataDogs: [
                    ...state.dataDogs,
                    action.payload
                ]
                }
                
        default:
            return state;
    }




}