import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {connect} from 'react-redux'

const App = props => {
  return (
    <MuiThemeProvider>
      <div>
        {props.isLoggedIn ? null : <Navbar />}
        <Routes />
      </div>
    </MuiThemeProvider>
  )
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.id
})

export default connect(mapStateToProps)(App)
