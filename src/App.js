import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import routes from './router'
import store from './store'

import OXAppHeader from './components/app-header'
import OXAppFooter from './components/app-footer'
import OXAppPlayerBar from './pages/player/app-player-bar'

import { HashRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <OXAppHeader />
          {renderRoutes(routes)}
          <OXAppFooter />
          <OXAppPlayerBar />
        </HashRouter>
      </Provider>
    )
  }
}

export default App
