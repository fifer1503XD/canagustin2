import './Chat.css'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { faCommentMedical, faHandPointLeft,faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Conversation from './Conversation';
import dataConversation from '../data/dataConversation';
import ConversationActive from './ConversationActive';
import { GetConversations } from '../actions/conversation';
import { useDispatch } from 'react-redux';

const Chat = () => {
    const dispatch = useDispatch()
    const uid = useSelector(state => state.auth.uid);
    useEffect(() => {
        dispatch(GetConversations(uid))
    }, []);
    const [Conver, setConver] = useState('');
    const [Visible, setVisible] = useState(false);
    const convers = useSelector(state => state.conver.dataConversations);

    return (

        <div>
            {Visible ? <div className="containerChat">

                <div className="headerChat">
                    <img className="logo" src="https://res.cloudinary.com/canagustin/image/upload/v1626622047/logo_vv2wsb.png" alt="" />

                    <div className="containerTitleChat">
                        <span className="titleChat">Can agustin Chat</span>
                        <FontAwesomeIcon className="iconChat" icon={faCommentMedical} />
                        <FontAwesomeIcon className="iconChat" icon={faHandPointLeft} onClick={() => setConver('')} />
                        <FontAwesomeIcon className="iconChat" icon={faTimesCircle} onClick={ ()=>setVisible(!Visible)} />
                    </div>

                </div>
                <div className="bodyChat">

                    {Conver ?
                        <ConversationActive id={Conver} />
                        : convers.map((conver) => {
                            return (
                                <Conversation setconver={setConver} data={conver} />
                            )
                        })}
                </div>
            </div>

                :
                <FontAwesomeIcon className="iconChat" icon={faCommentMedical} onClick={ ()=>setVisible(!Visible)} />


            }
        </div>
    );
}

export default Chat;