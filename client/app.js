import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Routes />
      </div>
    </MuiThemeProvider>
  )
}

export default App
