import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/LoginActions'
//Bootstap imports
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Grid, Row, Navbar,Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import NavBar from '../components/Nav/NavBar.jsx'
/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
 export default class App extends Component {
   constructor(props) {
     super(props)
     this.state = { isAuthenticated: localStorage ? true : false}
   }

   componentDidMount() {
     var wasAuth = localStorage.getItem('auth:user') ? true : false
     if (localStorage.getItem('auth:user') ? true : false) {
       var email = JSON.parse(localStorage.getItem('auth:user')),
           password = '',
           tkn = JSON.parse(localStorage.getItem('auth:tkn'))
       this.props.actions.Login(email, password, tkn)
     }
     this.setState({isAuthenticated: wasAuth})
   }

   componentWillReceiveProps(nextProps) {
     this.setState({isAuthenticated: nextProps.isAuthenticated})
   }

   handleLogout() {
     this.props.actions.Logout()
     localStorage.clear()
   }

   render() {
     return (
       <div>
         <NavBar />
           <Grid>
           <Row className='main-app-content'>

             {this.props.children}
           </Row>
         </Grid>
       </div>
     )
   }
 }
 const mapStateToProps = (state) => ({
     isAuthenticated: state.login.isAuthenticated,
     token: state.login.token,
     user: state.login.user.email
 })
 function mapDispatchToProps(dispatch) {
   return {
     actions: bindActionCreators(LoginActions, dispatch)
   };
 }
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(App);
