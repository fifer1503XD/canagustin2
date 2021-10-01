import './Chat.css'
import { useSelector } from 'react-redux'; 
import { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddNewMessage, MessageConversation } from '../actions/conversation';

const ConversationActive = (props) => {
    const converActive = useSelector(state => state.conver.Messages);
    const dispatch = useDispatch();
    const chatContainer = useRef();
    const inputMessage = useRef();
    const conversations = useSelector(state => state.conver.dataConversations);
    const uid = useSelector(state => state.auth.uid);
    const conversation = conversations.filter(conversation=> conversation._id===props.id)
    const {mensajes}= conversation[0]
    useEffect(() => {
        scrollToMyRef()
    }, [converActive,conversations]);

    useEffect(() => {
        dispatch (MessageConversation({mensajes}))
    }, [conversations]);
    

    const [message, setmessage] = useState();

    const handleData =()=>{
        console.log('handle data')
        {conversation === "" ?
        handleData():
        dispatch (MessageConversation({mensajes}))
    } 
        
    }
    
    const scrollToMyRef = () => {
        console.log(chatContainer.current.scrollHeight)
        console.log(chatContainer.current.clientHeight)
        const scroll =
          chatContainer.current.scrollHeight -
          chatContainer.current.clientHeight;
        chatContainer.current.scrollTo(0, chatContainer.current.scrollHeight+chatContainer.current.clientHeight );
      };
    
    
    const handleChange =(event)=>{
        const text = event.target.value;
        setmessage(text)
    }
    const handleReset =()=>{
        inputMessage.current.value=''
        
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(AddNewMessage({"id":uid,"mensaje":message},props.id))
        handleReset()
        scrollToMyRef()
    }
   
    return ( <div className="containerConversationActive">
        <div  ref={chatContainer} className ="messages">
         
        
            {   converActive ?
                 (converActive.map((conver)=>{
                    const {mensaje,id} = conver
                  if(uid===id){
                      return(
                            <div className="mensajeCreator">
                                <p>{mensaje}</p>
                            </div>
                      )
                  }
                  else{
                    return(
                        <div className="mensajeParticipant">
                            {mensaje}
                        </div>)
                  }
                })):
                <h1>esperar</h1>
                
            }
       
       

       

        
        </div>
        
        <div className ="textMessage">
            <form onSubmit={handleSubmit} >
            <input  ref={inputMessage} type="text" className="inputText" onChange={handleChange} />
            </form>
            </div>
            
    </div> );
}
 
export default ConversationActive;