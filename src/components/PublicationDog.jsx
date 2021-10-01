import "./blogcanagustin.css";
const PublicationDog = (props) => {
    console.log(props)
    const {name,edad,propietario,ubicacion,foto}=props.info
    return (
        <div>
            
            <div className="containerDescription">
            <div className="containerInfo">
            <h1><b>{name.toUpperCase() }</b></h1>
            <p className="infoPublication"><b>Ubicación : {ubicacion}</b></p>
            <p className="infoPublication"><b>Propietario : {propietario}</b></p>
            <p className="infoPublication"><b>Edad : {edad}</b></p>
            </div>
            <img className="containerImage" src={foto} alt="" />

            </div>

            



         
        </div>
    );
}

export default PublicationDog;