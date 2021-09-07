import './Chat.css'
import React,{useState} from 'react';
import { faCommentMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Conversation from './Conversation';
import dataConversation from '../data/dataConversation';
import ConversationActive from './ConversationActive';


const Chat = () => {
    const [Conver, setConver] = useState('');
    const data = dataConversation
    return (<div className="containerChat">

        <div className="headerChat">
        <img className="logo" src="https://res.cloudinary.com/canagustin/image/upload/v1626622047/logo_vv2wsb.png" alt="" />
        
        <div className="containerTitleChat">
        <span className="titleChat">Can agustin Chat</span>
        <FontAwesomeIcon className="iconChat" icon={faCommentMedical} />
        </div>
        
        </div>
        <div className="bodyChat">
            
           {Conver ?
           <ConversationActive participant={Conver}/>
           :dataConversation.map((conver)=>{
                return(
            <Conversation setconver={setConver}   data={conver}/> 
                )
            }) }    
        </div>
    </div>);
}

export default Chat;