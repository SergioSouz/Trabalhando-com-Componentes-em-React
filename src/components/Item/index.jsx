import React from "react";


const Item = (props) => {
  return(
    <a href="/" id="item" className="list-group-item list-group-item-action">{props.children}</a>
  )
}

export default Item;