import { fetchSinToken } from "../helpers/fetch";
import { types } from '../types/types';
import Swal from 'sweetalert2';

 export const AddNewMessage = (mensajes,id,) => {
    
    return async (dispatch) => {
        try {
            await fetchSinToken(`conversation/${id}`,  mensajes , 'POST');
            dispatch(AddMessage( mensajes,id ))
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `no se puso agregar ${error}`
            })


        }
    }
} 

const AddMessage = ( mensajes,idconver ) => ({
    type: types.ConversationsAddMessage,
    payload: {mensajes,idconver}
});

export const GetConversations = (id) => {
    return async (dispatch) => {
        const resp = await fetchSinToken(`conversation/${id}` , {}, 'GET');
        const { conversations } = await resp.json();
        if (conversations) {
            dispatch(DataConversations(
                conversations
            ))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'no se pudo cargar conversaciones!'
            })


        }
    }
}

export const DataConversations = ( conversations ) => ({
    type: types.ConversationsCargarData,
    payload: conversations
});

export const MessageConversation = ( Messages ) => ({
    type: types.ConversationMessage,
    payload: Messages
});