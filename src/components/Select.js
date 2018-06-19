import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import dataJSON from './db.json';
import ListTodo from "./ListTodo.js";
const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
  state = {
    completed: '2',
    open: false,
    data:dataJSON,
    selected:dataJSON
  };

  handleChange = event => {
    let select = event.target.value;
    let selected = this.state.data.filter((item)=>{
      return item.completed === select;
    })
    console.log(select);
    if(select === 2){
      this.setState({ [event.target.name]: select ,selected:dataJSON});
    }else{
      this.setState({ [event.target.name]: select ,selected:selected});
    }
    
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
        
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.completed}
            onChange={this.handleChange}
            inputProps={{
              name: 'completed',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value={2}><em>All</em> </MenuItem>
            <MenuItem value={1}>Completed</MenuItem>
            <MenuItem value={0}>Incompleted</MenuItem>
          </Select>
          < ListTodo data={this.state.selected} />
        </FormControl>
      </form>
     
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
