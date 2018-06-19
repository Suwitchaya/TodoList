import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
// import styled from 'styled-components'
import DatePickers from './DatePicker';
import Input from '@material-ui/core/Input';
import {connect}  from 'react-redux';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  state = {
    open: false,
    title: "",
    des: "",
    date:""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  addTodoList = () => {
    const inputTitle = this.state.title;
    const inputDes = this.state.des;
    // this.state.data.push({ list: input.value })
    // this.setState({ data: [...this.state.data, input.value] });
    console.log("inputTitle: "+inputTitle);
    console.log("inputDes: "+inputDes);
  }
  handleChange = (key)=>{
    let input = key.target.value;
    this.setState({[key.target.name]:input})
    console.log(key.target.name+"+"+input);
  }
  clickDate = (x) => {
    // this.setState({
    //   controlledDate: date,
    // });
    console.log("date:"+x.target.value);
  };
  render() {
  //   const Input = styled.input`
  //   padding: 0.5em;
  //   margin: 0.5em;
  //   color: palevioletred;
  //   background: papayawhip;
  //   border: none;
  //   border-radius: 3px;
  //   width:60%;
  // `;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>ADD</Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
          Add Todo List
          </DialogTitle>
          <DialogContent>
              <div className="text-lable"> <span> Title : </span>
                    <Input
                    placeholder="Title"
                    className="input-text"
                    onChange={this.handleChange}
                    inputProps={{
                      'name': 'title',
                    }} />
              </div>
              <div className="text-lable"> <span> Description : </span>
                    <Input
                          placeholder="Description"
                          className="input-text"
                          onChange={this.handleChange}
                          inputProps={{
                            'name': 'des',
                          }}
                    />
              </div>
              <div className="text-lable"> <span> Date : </span><DatePickers  /></div>
              <p>{this.props.title}</p>
          </DialogContent>
          <DialogActions>
            {this.state.des}
            <Button variant="outlined"  onClick={this.addTodoList} color="primary">
              ADD
            </Button>
            <Button variant="outlined" color="secondary" onClick={this.handleClose} >
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    title : state.title
  }
}

export default connect(mapStateToProps)(AlertDialogSlide);
