import { useSelector } from "react-redux";
const Conversation = (props) => {
    console.log(props)
    const uid = useSelector(state => state.auth.uid);
    const {participant,creator,mensajes,_id}=props.data
    const ultimoMensaje =(mensajes[mensajes.length-1].mensaje)
    console.log(creator._id)
   
    return ( 
        <div className="conversation" onClick={()=>props.setconver(_id)}>

                <img className="imgProfile" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" />

                <div className="chatName">

                    {  creator._id === uid ? <h4>{participant.name}{participant.lastName}</h4> : (<h4>{creator.name}{creator.lastName}</h4>)  }
                  <p>{ultimoMensaje}</p> 
                </div>
            </div>
    );
}
 
export default Conversation;