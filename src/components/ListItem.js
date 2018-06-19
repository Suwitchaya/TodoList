import React from 'react';


const ListItem = (props) => {
  
  
  return(
    <div className="list-item" key={props.item.id}>
      <h3>{props.item.title}</h3>
      <div>
        {props.item.description}
      </div>
      <p>{props.item.date}</p>
    </div>
  )
}

export default ListItem;