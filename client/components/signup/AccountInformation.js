import React, {Component} from 'react'
import {connect} from 'react-redux'
import {auth} from '../../store'
import AppBar from 'material-ui/AppBar'
import {GridList, GridTile} from 'material-ui/GridList'
import TextField from 'material-ui/TextField'
import Button from '@material-ui/core/Button'
class AccountInformation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstAndLastName: '',
      email: '',
      password: ''
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onNameChange = (evt, index, value) => {
    evt.preventDefault()
    this.setState({firstAndLastName: evt.target.value})
  }

  onEmailChange = (evt, index, value) => {
    evt.preventDefault()
    this.setState({email: evt.target.value})
  }

  onPasswordChange = (evt, index, value) => {
    evt.preventDefault()
    this.setState({password: evt.target.value})
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const name = this.state.firstAndLastName
    const email = this.state.email
    const password = this.state.password
    const result = this.props.handleSubmit(email, password, 'signup', name)
  }

  render() {
    return (
      <div>
        <AppBar title="Admin" />

        <GridList cols={1} cellHeight="auto">
          <GridTile>
            <TextField
              name="firstAndLastName"
              value={this.state.firstAndLastName}
              onChange={this.onNameChange}
              floatingLabelText="First and Last Name"
            />
          </GridTile>

          <GridTile>
            <TextField
              name="email"
              value={this.state.email}
              onChange={this.onEmailChange}
              floatingLabelText="Email"
            />
          </GridTile>

          <GridTile>
            <TextField
              name="password"
              value={this.state.password}
              onChange={this.onPasswordChange}
              floatingLabelText="Password"
            />
          </GridTile>

          <GridTile>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </GridTile>
        </GridList>
      </div>
    )
  }
}
const mapDispatch = dispatch => {
  return {
    handleSubmit(email, password, method, name) {
      dispatch(auth(email, password, method, name))
    }
  }
}
export default connect(null, mapDispatch)(AccountInformation)
