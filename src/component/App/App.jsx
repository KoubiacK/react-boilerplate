import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { Grid, Row } from 'react-bootstrap'

//Redux
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

// import css
import { style } from './App.css'

//config
var julha_config = require('json!.././.././julha_config.json')

// custom component
import NavBar from '../NavBar/NavBar.jsx'

//Création du ReduxStore
// ,window.devToolsExtension && window.devToolsExtension() <= ReduxDevTools
const store = createStore(
  reducer,
   {counter: 0},
   window.devToolsExtension && window.devToolsExtension(),
 compose(
   applyMiddleware(thunk)
 )
)


class App extends Component {
constructor(props) {
  super()
}
    // global variable, accessible in all child with .contextTypes
    getChildContext() {
        return {
          julha_config: julha_config,
          store: store
        } // config
    }

    render() {
        return (
          <div className="app-container">
            <NavBar />
            <Grid style={{background: '#f8f8f8', minHeight: '100vh'}}>
            <Row>
              {this.props.children}
              </Row>
              </Grid>
              </div>
        )
    }
}


// global variable, accessible in all child with .contextTypes
App.childContextTypes = {
  store: React.PropTypes.object.isRequired,
    julha_config: React.PropTypes.object.isRequired
}

// export the component
export default App
