import React,{useState} from 'react';
import Modal from 'react-modal';
import { faPlusCircle,faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from 'react-redux';
import {useForm} from '../hooks/useForm'
import { AddImage, AddNewDog } from '../actions/dogs';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const  NewDog = () => {
  const  dispatch = useDispatch();
  const [foto, setFoto] = useState();
    const initialForm = {
      name: 'juan',
      edad:'1',
      propietario: 'felipe',
      ubicacion:'faca',
  };
const [ formValues, handleInputChange ] = useForm( initialForm );
let  { name,edad,propietario,ubicacion } = formValues;
const handleNewDog = (event) => {
  dispatch( AddNewDog ( name,edad,propietario,ubicacion,foto ) )
  setIsOpen(false);
};

const handleUploadImage =()=>{
  document.querySelector('#fileSelector').click();
}

const handleFileChange =async (e) =>{
 const file = e.target.files[0]
 if( file ){
   const url = dispatch(AddImage(file))
   console.log(url)
    await url.then((response) => setFoto(response));  
    console.log(foto)
   
 }
 
}
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);

    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <div>
          
        <FontAwesomeIcon onClick={openModal} icon={faPlusCircle} />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Agrega un perro</h2>
          <button onClick={closeModal}>X</button>
          <form noValidate >
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Nombre"
            name="name"
            autoComplete="name"
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Edad"
            name="edad"
            autoComplete="edad"
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="propietario"
            label="Propietario"
            name="propietario"
            autoComplete="propietario"
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="ubicacion"
            label="Ubicacion"
            id="ubicacion"
            onChange={handleInputChange}
            autoComplete="current-password"
          />

        <FontAwesomeIcon onClick={()=>handleUploadImage()} icon={faImages} />
          <input
          id="fileSelector"
          name="file"
          type="file"
          style={{display:'none'}}
          onChange={handleFileChange}
          >
          
          </input>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={()=>handleNewDog()}
          >
            Agregar perro
          </Button>
          
        </form>
        </Modal>
      </div>
    );
}
 
export default NewDog ;

