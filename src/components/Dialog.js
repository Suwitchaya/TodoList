import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
// import styled from 'styled-components'
// import DatePicker from 'react-date-picker';
import Input from '@material-ui/core/Input'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { ADD_TODOLIST } from '../store/actions/actionTypes'

function Transition (props) {
  return <Slide direction="up" {...props} />
}

class AlertDialogSlide extends React.Component {
  state = {
    open: false,
    title: '',
    description: '',
    date: '',
    time: ''
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
  addTodoList = () => {
    // const inputTitle = this.state.title
    // const inputDes = this.state.des
    // const inputDate = this.state.date
    // const inputTime = this.state.time
    this.props.addTodos(this.state)
    this.setState({ open: false })
  }
  handleChange = (key) => {
    const { name, value } = key.target
    let input = key.target.value
    this.setState({ [key.target.name]: value.toString() })
    console.log(key.target.name + '+' + input)
  }

  _onChange = (date) => this.setState({ datetime: date })
  render () {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          ADD
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">Add Todo List</DialogTitle>
          <DialogContent>
            <div className="text-lable">
              <span> Title : </span>
              <Input
                placeholder="Title"
                className="input-text"
                onChange={this.handleChange}
                inputProps={{
                  name: 'title'
                }}
              />
            </div>
            <div className="text-lable">
              <span> Description : </span>
              <Input
                placeholder="Description"
                className="input-text"
                onChange={this.handleChange}
                inputProps={{
                  name: 'description'
                }}
              />
            </div>
            <div className="text-lable">
              <span> Date : </span>
              <TextField
                id="date"
                type="date"
                value={this.state.date}
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  name: 'date'
                }}
              />
              <TextField
                id="time"
                type="time"
                value={this.state.time}
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  name: 'time'
                }}
              />
            </div>
            <div className="text-lable"> </div>
            <p>{this.props.title}</p>
          </DialogContent>
          <DialogActions>
            {this.state.des}
            <Button variant="outlined" onClick={this.addTodoList} color="primary">
              ADD
            </Button>
            <Button variant="outlined" color="secondary" onClick={this.handleClose}>
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (payload) => {
      dispatch({ type: ADD_TODOLIST, payload })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialogSlide)
