 import { useState } from "react";
 import heartOutline from "../assets/heart-outline.png";
 import heartFill from "../assets/heart-fill.png";
 import food from "../assets/food.jpg";
 import "./Card.css";

export const CardPublication = (props) => {

    return (  
        <div className="card col-sm-12" onClick={()=>props.setcard(props)}>
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-date">{props.date}</div>
        </div>
      </div>
      <img className="card-image" src={props.image} alt="Logo" />
      <div className="card-text">{props.description}</div>
      <div className="card-like-bar">
        {props.liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
      </div>
    </div>
    );
}
 
