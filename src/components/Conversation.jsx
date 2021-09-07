const Conversation = (props) => {
    const {participant,nombre,ultimoMensaje}=props.data
   
    return ( 
        <div className="conversation" onClick={()=>props.setconver(participant)}>

                <img className="imgProfile" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" />

                <div className="chatName">
                    <h2>{nombre}</h2>
                    <p>{ultimoMensaje}</p>
                </div>
            </div>
    );
}
 
export default Conversation;