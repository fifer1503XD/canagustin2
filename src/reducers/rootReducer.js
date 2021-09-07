import { combineReducers } from "redux";


import { authReducer } from "./authReducer";
import { dogsReducer } from "./dogsReducer";



export const rootReducer = combineReducers({

    auth : authReducer,
    dogs : dogsReducer,
})