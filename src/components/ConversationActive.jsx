import './Chat.css'
import dataConversation from "../data/dataConversation";

const ConversationActive = (props) => {
    alert(props.participant)
    const conver = dataConversation.filter(participant => participant.participant === props.participant)
    const {mensajes} = conver[0] 
    console.log(conver)
    console.log(mensajes)
    return ( <div className="containerConversationActive">
        {mensajes.map((conver)=>{
            const {mensaje,id} = conver
          if(id===props.participant){
              return(
                    <div className="mensajeParticipant">
                        {mensaje}
                    </div>
              )
          }
          else{
            return(
                <div className="mensajeCreator">
                    {mensaje}
                </div>)
          }
        })}
    </div> );
}
 
export default ConversationActive;