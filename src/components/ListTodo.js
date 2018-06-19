import React from 'react';
import ListItem from './ListItem'

const ListTodo = (props) =>{
  
  const item = props.data.map((item)=>{
    return(
      <ListItem key={item.id} item={item} />
    )
  })
  return(
    <div>
    {item}
    </div>
    
  )
}

export default ListTodo;