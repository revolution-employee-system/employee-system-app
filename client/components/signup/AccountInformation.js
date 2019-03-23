import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import {GridList, GridTile} from 'material-ui/GridList'
import TextField from 'material-ui/TextField'
import Button from '@material-ui/core/Button'

export default class AccountInformation extends Component {
  constructor() {
    super()
    this.state = {
      firstAndLastName: '',
      email: '',
      password: ''
    }
  }

  onNameChange = (evt, index, value) => {
    this.setState({firstAndLastName: value})
  }

  onEmailChange = (evt, index, value) => {
    this.setState({email: value})
  }

  onPasswordChange = (evt, index, value) => {
    this.setState({password: value})
  }

  onSubmit = evt => {
    evt.preventDefault()
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
              name="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
              floatingLabelText="Password"
            />
          </GridTile>

          <GridTile>
            <Button>Submit</Button>
          </GridTile>
        </GridList>
      </div>
    )
  }
}
