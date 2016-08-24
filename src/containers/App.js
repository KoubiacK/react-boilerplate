import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '../actions/CounterActions'
import Counter from '../components/Counter'
//Bootstap imports
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { Nav, NavItem } from 'react-bootstrap'
/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
 export default class App extends Component {
   render() {
     // we can use ES6's object destructuring to effectively 'unpack' our props
     const { counter, actions } = this.props;
     return (
       <div className="main-app-container">
         <div className="main-app-nav">
           <Nav bsStyle="tabs" justified>
             <LinkContainer to={'/Home'}>
               <NavItem eventKey={1} href="/home">Home</NavItem>
             </LinkContainer>
             <LinkContainer to={'/Counter'}>
               <NavItem eventKey={2} href='/counter'>Counter</NavItem>
             </LinkContainer>
             <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
           </Nav>
         </div>
         <div className='main-app-content'>
           {this.props.children}
         </div>
       </div>
     )
   }
 }
