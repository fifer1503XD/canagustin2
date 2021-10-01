import { types } from "../types/types";

const initialState = {
    dataConversations: [],
    Messages: [{"id": "61097bd51c6cf80e38d26621",
    "mensaje": "que se dice"
    }]
}
export const conversationReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.ConversationsCargarData:
            return {
                ...state,
                dataConversations: action.payload,
            }
        case types.ConversationsAddMessage:
            return {
                ...state,
                Messages: [
                    ...state.Messages,
                    action.payload.mensajes
                ]
            }
        case types.ConversationMessage:
            return {
                ...state,
                Messages: action.payload.mensajes
            }
        default:
            return state;
    }




}