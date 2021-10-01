import React from 'react';

const CardDog = (props) => {

  const {name,edad,propietario,ubicacion,foto}=props.info
  return (
    <div className="card col-sm-12" onClick={()=>props.setcard(props.info)}>
      <div className="card-header">
        <div className="profile">
          <span className="letter">{propietario[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">Nombre: {name}</h5>
        </div>
      </div>
      <img className="card-image" src={foto} alt="Logo" />
      <div className="card-text">Edad: {edad}</div>
      <div className="card-text">Ubicacion: {ubicacion}</div>
      <div className="card-like-bar">
        
      </div>
    </div>
    
  );
}

 
export default CardDog;