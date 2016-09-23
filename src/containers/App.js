import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/LoginActions'
//Bootstap imports
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Grid, Row, Navbar,Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
//Components import
import NavBar from '../components/Nav/NavBar.jsx'

import * as auth from '../api/auth/auth'


 export default class App extends Component {
   constructor(props) {
     super(props)
     this.state = { isAuthenticated: false}
   }

   componentDidMount() {
     //Check if we have hash in localStorage
     var wasAuth = localStorage.getItem('auth:tkn') ? true : false

     if (wasAuth) {
       var credentials = localStorage.getItem('auth:tkn').split('.', 2)
       var data = { ID: credentials[0], hash: credentials[1] }
       var that = this

       auth.relog(data, that)
       this.setState({isAuthenticated: true})
     }

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
     user: state.login.user.email
 })
 function mapDispatchToProps(dispatch) {
   return {
     actions: bindActionCreators(LoginActions, dispatch)
   };
 }
 export default connect(
   mapStateToProps,
   mapDispatchToProps,
   null,
   { pure: false }
 )(App);
