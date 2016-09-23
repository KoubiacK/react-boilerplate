import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory, hashHistory } from 'react-router'
import { createHistory, useBasename } from 'history'
import App from './App'
import Home from './Home'
import Counter from './Counter'
import Login from './Login'
import LandingPage from './LandingPage'
import SignUp from './SignUp'

//Definition browserHistory selon NODE_ENV
const history = process.env.NODE_ENV === 'production' ?
  hashHistory :
  browserHistory

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to='/home' />
    <Route path="home" component={Home}/>
    <Route path="landingpage" component={LandingPage}/>
    <Route path="counter" component={Counter}/>
    <Route path="login" component={Login}/>
    <Route path="signup" component={SignUp}/>
  </Route>
)
export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      /**
       * Provider is a component provided to us by the 'react-redux' bindings that
       * wraps our app - thus making the Redux store/state available to our 'connect()'
       * calls in component hierarchy below.
       */
      <Provider store={store}>
        <Router history={history}>
          { routes }
        </Router>
      </Provider>
    )
  }
}
