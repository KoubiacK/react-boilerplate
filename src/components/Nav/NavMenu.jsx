import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

export default class NavMenu extends Component {
  render() {
    return(
        <Nav>
          <IndexLinkContainer to={'/Home'} activeClassName='active'>
            <NavItem eventKey='1'>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to={'/LandingPage'} activeClassName='active'>
            <NavItem eventKey='2'>Landin Page</NavItem>
          </LinkContainer>
          <LinkContainer to={'/Counter'} activeClassName='active'>
            <NavItem eventKey='3'>Counter</NavItem>
          </LinkContainer>
          <LinkContainer to={'/Test'} activeClassName='active'>
            <NavItem eventKey='3'>Test</NavItem>
          </LinkContainer>
          <NavItem disabled eventKey='4'>ToDo List</NavItem>
        </Nav>
      )
  }
}
