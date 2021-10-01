import { combineReducers } from "redux";


import { authReducer } from "./authReducer";
import { dogsReducer } from "./dogsReducer";
import {conversationReducer} from "./conversationReducer"



export const rootReducer = combineReducers({
    conver : conversationReducer,
    auth : authReducer,
    dogs : dogsReducer,
})