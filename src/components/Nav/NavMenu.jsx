import React, { Component, PropTypes } from 'react'
import {Nav, NavItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

export default class NavMenu extends Component {
  render() {
    return(
        <Nav>
          <LinkContainer to={'/Home'}>
            <NavItem href="/home">Home</NavItem>
          </LinkContainer>
          <LinkContainer to={'/LandingPage'}>
            <NavItem href='/counter' className='menuItem'>Landin Page</NavItem>
          </LinkContainer>
          <LinkContainer to={'/Counter'}>
            <NavItem href='/counter' className='menuItem'>Counter</NavItem>
          </LinkContainer>
          <NavItem disabled>ToDo List</NavItem>
        </Nav>
      )
    }
}
