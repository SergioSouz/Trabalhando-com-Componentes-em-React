import React from "react";


function Button(props){
  return(

    <button 
      type="button" 
      onClick={props.onclick}  
      className={props.className}
      
    >{props.children}</button>
  )
}

export default Button