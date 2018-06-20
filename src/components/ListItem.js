import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const ListItem = (props) => {

  const handleToggle = e =>{
    console.log(e.target.value);
  }
  
  return(
    <li className="list-item" key={props.item.id}>
    <Checkbox
                // checked={props.item.id}
                tabIndex={-1}
                disableRipple
                value={props.item.id}
                onChange={handleToggle}
              />
      <h3>{props.item.title}</h3>
      <p>
        {props.item.description}
      </p>
      <p>{props.item.date}</p>
    </li>
  )
}

export default ListItem;