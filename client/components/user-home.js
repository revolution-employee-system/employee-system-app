import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import PageviewIcon from '@material-ui/icons/Pageview'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../styles/user-homeStyles'

/**
 * COMPONENT
 */

export const UserHome = props => {
  const {classes, user} = props

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PageviewIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Hi, {user.name.toUpperCase()}!
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="jobNumber">Job Number</InputLabel>
            <Input
              name="jobNumber"
              type="jobNumber"
              id="jobNumber"
              autoComplete="current-jobNumber"
            />
          </FormControl>
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Search
        </Button>
      </Paper>
    </main>
  )
}

/**
 * CONTAINER
 */
const mapState = state => ({
  user: state.user
})

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  user: PropTypes.object,
  classes: PropTypes.object.isRequired
}

export default connect(mapState)(withStyles(styles)(UserHome))
