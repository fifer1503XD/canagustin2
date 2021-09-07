import PublicationScreen from "../components/PublicationScreen";
import { types } from "../types/types";

const initialState = {
    isAutenticated: true,
    component: PublicationScreen,
    // name: null
}
export const authReducer = ( state = initialState, action ) => {


    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                isAutenticated:true,
                component: PublicationScreen,
                ...action.payload, 
                }
        case types.authLogout:
            return {
               isAutenticated:false
                }
        case types.authComponent:
            return {
                ...state,
                component:action.payload
                }
        default:
            return state;
    }




}