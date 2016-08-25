import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
//Bootstap imports
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Grid, Row, Navbar,Nav, NavItem, Glyphicon } from 'react-bootstrap'

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
 export default class App extends Component {
   constructor(props, context) {
     super(props, context)
     this.state = {
       isLogged: this.props.login
     }
   }
   render() {
     // we can use ES6's object destructuring to effectively 'unpack' our props
     const {login, actions} = this.props
     var menuLogin = new String('Login')
     menuLogin.profil = 'Profil'
     menuLogin.icon = <Glyphicon glyph='user' />
     var isLogged = this.props.login ? menuLogin.icon : menuLogin
     console.log(menuLogin.icon);
     return (
       <div className="main-app-container">
         <div className="main-app-nav">
           <Navbar>
             <Nav>
             <LinkContainer to={'/Home'}>
               <NavItem href="/home">Home</NavItem>
             </LinkContainer>
             <LinkContainer to={'/Counter'}>
               <NavItem href='/counter' className='menuItem'>Counter</NavItem>
             </LinkContainer>
             <NavItem disabled>ToDo List</NavItem>
             </Nav>
             <Nav pullRight>
               <LinkContainer to={'/Login'}>
               <NavItem href="/login">{isLogged}</NavItem>
               </LinkContainer>
             </Nav>
           </Navbar>
         </div>
         <Grid>
         <Row className='main-app-content'>

           {this.props.children}
         </Row>
       </Grid>
       </div>
     )
   }
 }
 App.propTypes = {
   login: PropTypes.bool.isRequired
 }
 function mapStateToProps(state) {
   return {
     login: state.login
   }
 }
 export default connect(
   mapStateToProps
 )(App);
