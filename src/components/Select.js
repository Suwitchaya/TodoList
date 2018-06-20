import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import dataJSON from './db.json'
import ListTodo from './ListTodo.js'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dataStore: [ state ],
    title: state.title
  }
}
class ControlledOpenSelect extends React.Component {
  state = {
    completed: '2',
    open: false,
    data: this.props.dataStore,
    selected: this.props.dataStore
  }

  handleChange = (event) => {
    let select = event.target.value
    let selected = this.props.dataStore.filter((item) => {
      return item.completed === select
    })
    console.log(select)
    if (select === 2) {
      this.setState({ [event.target.name]: select, selected: this.props.dataStore })
    } else {
      this.setState({ [event.target.name]: select, selected: selected })
    }
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  render () {
    return (
      <form autoComplete="off">
        <FormControl>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.completed}
            onChange={this.handleChange}
            inputProps={{
              name: 'completed',
              id: 'demo-controlled-open-select'
            }}
          >
            <MenuItem value={2}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={1}>Completed</MenuItem>
            <MenuItem value={0}>Incompleted</MenuItem>
          </Select>
          <ListTodo data={this.state.selected} />
          <p>{this.props.title}</p>
        </FormControl>
      </form>
    )
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(ControlledOpenSelect)
