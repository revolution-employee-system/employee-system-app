import React, {Component} from 'react'
import {connect} from 'react-redux'
import {auth} from '../../store'
import styles from '../../styles/signup/signupStyles'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

class AccountInformation extends Component {
  constructor() {
    super()
    this.state = {
      firstAndLastName: '',
      email: '',
      password: ''
    }
  }
  dynamicChangeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    const name = this.state.firstAndLastName
    const email = this.state.email
    const password = this.state.password
    const result = this.props.handleSubmit(email, password, 'signup', name)
  }
  render() {
    const {classes} = this.props
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up / Account Register
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="firstAndLastName">
                First and Last Name
              </InputLabel>
              <Input
                id="firstAndLastName"
                name="firstAndLastName"
                autoComplete="firstAndLastName"
                autoFocus
                onChange={e => this.dynamicChangeHandler(e)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => this.dynamicChangeHandler(e)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => this.dynamicChangeHandler(e)}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={e => this.handleSubmit(e)}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}
AccountInformation.propTypes = {
  classes: PropTypes.object.isRequired
}
const mapDispatch = dispatch => ({
  handleSubmit: (email, password, method, name) =>
    dispatch(auth(email, password, method, name))
})
export default connect(null, mapDispatch)(
  withStyles(styles)(AccountInformation)
)
