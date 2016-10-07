import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, hashHistory, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import App from './App'
import Home from './Home'
import Counter from './Counter'
import Login from './Login'
import LandingPage from './LandingPage'
import SignUp from './SignUp'
import Profil from './Profil'
import Test from '../components/test.jsx'
//Definition browserHistory selon NODE_ENV
const history = process.env.NODE_ENV === 'production' ?
  hashHistory :
  useRouterHistory(createHistory)({
    basename: '/'
  })

const routes = (
  <Route path='/' component={App}>
    <IndexRedirect to='/home' />
    <Route path='home' component={Home}/>
    <Route path='test' component={Test}/>
    <Route path='landingpage' component={LandingPage}/>
    <Route path='counter' component={Counter}/>
    <Route path='login' component={Login}/>
    <Route path='signup' component={SignUp}/>
    <Route path='profil' component={Profil}/>
  </Route>
)
export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
          { routes }
        </Router>
      </Provider>
    )
  }
}
