import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
//Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './component/App/App.jsx'
import Users from './component/Users/Users.jsx'
import User from './component/User/User.jsx'
import Login from './component/Login/Login.jsx'

let store = createStore(() => {})


class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
            </div>
        )
    }
}
class NoMatch extends Component {
    render() {
        return (
            <div>
              <h1>NoMatch</h1>
            </div>
        )
    }
}


// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="users" component={Users}>
          <Route path="/user/:userId" component={User}/>
        </Route>
        <Route path="about" component={About}/>
        <Route path="login" component={Login}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
