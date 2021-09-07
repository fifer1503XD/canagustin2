import { types } from '../types/types';
import Swal from 'sweetalert2';
import { fetchSinToken } from "../helpers/fetch";
import { fileUpload } from '../helpers/fileUpload';



export const GetDataDogs = (  ) => {
    return async( dispatch ) => {
        const resp = await fetchSinToken( 'dogs/', {}, 'GET' );
        const {perros} = await resp.json();
        
        
        if( perros ) {
            dispatch( Datadogs(
               perros
            ) )
        } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Credenciales incorrectas!'
        })
        

    }
    }
}
export const AddNewDog = ( name,edad,propietario,ubicacion,foto ) => {
    console.log(name,edad,propietario,ubicacion,foto)
    return async( dispatch) => {
        try {
            await fetchSinToken( 'dogs/', {name,edad,propietario,ubicacion,foto}, 'POST' );
            Swal.fire({
                icon: 'success',
                title: ':D',
                text: `Agregado`
        })
        dispatch(AddDog({name,edad,propietario,ubicacion,foto}))
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `no se puso agregar ${error}`
        })
        
        
        }}}
export const AddImage = (file)=>{
    return async(dispatch)=>{
        
        try {
            const url = await fileUpload(file)
            if (url){
                return url
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const HandleAddImage =(file)=>{
    console.log(AddImage(file))
}

export const Datadogs = ( dogs ) => ({
    type: types.DogsCargarData,
    payload: dogs
});

 const AddDog = ( dogs ) => ({
    type: types.DogsAgregarNuevo,
    payload: dogs
});