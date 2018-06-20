import React from 'react';
import ListItem from './ListItem'

const ListTodo = (props) =>{
  
  const item = props.data.map((item)=>{
    return(
      <ListItem key={item.id} item={item} />
    )
  })
  return(
    <ui className="todo-list">
    {item}
    </ui>
    
  )
}

export default ListTodo;