import React,{useEffect} from 'react';
import Navbar  from "./Navbar";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import Account from "./Account";
import { ChangeComponent, logout } from "../actions/auth";
import { GetDataDogs } from "../actions/dogs";
import {GetConversations} from "../actions/conversation"
import Chat from './Chat';

const PublicationScreen = () => {
  const uid = useSelector(state => state.auth.uid);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetDataDogs());
    dispatch(GetConversations(uid));
  }, [dispatch]);
    return (  <div>
      <div>
      <Navbar/>
      </div>
        
        <Chat />
        <Link to="/account" >
                <button onClick={()=> dispatch(ChangeComponent(Account))}>
                  <span>My Account</span>
                </button>
              </Link>
              <button onClick ={()=>dispatch(logout())}>
      logout
    </button>
              
    </div>);
}
 
export default PublicationScreen;