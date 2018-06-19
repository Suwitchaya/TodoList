import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class DatePickers extends React.Component {
  state={
    date:"2017-05-24",
    time:"07:30"
  }
changeDate=(e)=>{
  this.setState({[e.target.name]:e.target.value});
console.log(e.target.name +"+"+e.target.value);
}
 render(){
    return (
    <form noValidate>
      <TextField
         id="date"
         type="date"
         value={this.state.date}
         onChange={this.changeDate}
         InputLabelProps={{
           shrink: true,
         }}
          inputProps={{
          "name": "date", // 5 min
        }}
      />
       <TextField
        id="time"
        type="time"
        value={this.state.time}
        onChange={this.changeDate}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          "name": "time", // 5 min
        }}
      />
    </form>
  );
 }
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
