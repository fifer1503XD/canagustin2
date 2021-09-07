
import { fetchSinToken } from "../helpers/fetch";
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const StartLogin = ( email,password ) => {
        return async( dispatch ) => {
    
            const resp = await fetchSinToken( 'auth/login/', { email, password }, 'POST' );
            const body = await resp.json();
    
            if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );
    
                dispatch( login({
                    uid: body.uid,
                    name: body.name+" "+body.lastName
                }) )
            } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Credenciales incorrectas!'
            })
            
    
        }
    }
        
}   

export const StartRegister = ( name,lastName,email,password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/register/', {name,lastName,email,password}, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }


    }
}



export const login = (user ) => ({
    type: types.authLogin,
    payload: user
});

export const logout = (user ) => ({
    type: types.authLogout
});
    
export const ChangeComponent = (component) => ({
    type: types.authComponent,
    payload: component
});

export const Component =(component)=>{
    alert(component)
}