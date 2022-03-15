import React from "react";
import Button from '../Button';


const Card = (props) =>{

  return(
    <div className="card">
      <div className="card-header">
        {props.title}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.subtitle}</h5>
        <p className="card-text">{props.value}</p>
      </div>
      
    </div>
  )
}


export default Card