import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Home from './Home'
import Counter from './Counter'
import Login from './Login'


/**
 * Component is exported for conditional usage in Root.js
 */
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
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="counter" component={Counter}/>
            <Route path="login" component={Login}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}
