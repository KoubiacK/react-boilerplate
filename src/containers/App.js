import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
//Bootstap imports
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Grid, Row, Navbar,Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
 export default class App extends Component {
   render() {
     console.log(this.props);
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
             {!this.props.isAuthenticated &&
               <Nav pullRight>
                 <LinkContainer to={'/Login'}>
                 <NavItem href="/login">
                   Login
                 </NavItem>
                 </LinkContainer>
               </Nav>
             }
             {this.props.isAuthenticated &&
               <Nav pullRight>
                 <NavDropdown eventKey="4" title={this.props.user} id="nav-dropdown">
                   <MenuItem eventKey="4.1">Action</MenuItem>
                   <MenuItem eventKey="4.2">Another action</MenuItem>
                   <MenuItem eventKey="4.3">Something else here</MenuItem>
                   <MenuItem divider />
                   <MenuItem eventKey="4.4">{this.props.token}</MenuItem>
                 </NavDropdown>
               </Nav>
             }

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
 const mapStateToProps = (state) => ({
     isAuthenticated: state.login.isAuthenticated,
     token: state.login.token,
     user: state.login.user.email
 })
 export default connect(
   mapStateToProps
 )(App);
