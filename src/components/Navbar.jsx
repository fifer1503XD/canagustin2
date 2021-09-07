import './navbar.css'
import React ,{useState} from 'react';
import { NavLink} from 'react-router-dom';
import { useDispatch } from "react-redux";
import Account from "./Account";
import { ChangeComponent, logout } from "../actions/auth";
import Adopta from './Adopta';
import CuidaTuCanino from './CuidaTuCanino';
import CanAgustin from './CanAgustin';
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
    const dispatch = useDispatch();
    return ( 
    <nav className="navbar">
    <div className="nav-container">
    <NavLink exact to="/" className="nav-logo">
            CANAGUSTIN
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={()=> dispatch(ChangeComponent(Adopta))}
              >
                Adopta
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={()=> dispatch(ChangeComponent(CuidaTuCanino))}
              >
                Cuida a tu canino
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={()=> dispatch(ChangeComponent(CanAgustin))}
              >
                Canagustin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={()=> dispatch(ChangeComponent(Account))}
              >
                Mi cuenta
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick ={()=>dispatch(logout())}
              >
                Cerrar sesion
              </NavLink>
            </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
    </div> 
    </nav> );
}
 
export default Navbar;