import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'
import { CHENGE_COMPLETED } from '../store/actions/actionTypes'

const handleToggle = (e) => {
  console.log([ e.target.name ], e.target.value)
  // this.props.addTodos({ [e.target.name]: e.target.value, completed: 0 })
  this.props.changCom('xx')
}
const ListItem = (props) => {
  return (
    <li className="list-item" key={props.item.id}>
      <Checkbox
        // checked={props.item.id}
        tabIndex={-1}
        disableRipple
        value={props.item.id}
        onChange={handleToggle}
        inputProps={{
          name: 'id'
        }}
      />
      <h3>{props.item.title}</h3>
      <p>{props.item.description}</p>
      <p>{props.item.date}</p>
    </li>
  )
}
const mapDispatchToProps = (dispatch) => {
  console.log('dispatch: ', dispatch)
  // return {
  //   changCom: (payload) => {
  //     dispatch({ type: CHENGE_COMPLETED, payload })
  //   }
  // }
}
export default connect(mapDispatchToProps)(ListItem)
