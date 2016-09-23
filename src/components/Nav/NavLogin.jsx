import React, { Component } from 'react'
import { Grid, Row, Navbar,Nav, NavItem, NavItemLink, NavDropdown, MenuItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
export default class NavLogin extends Component {
  constructor(props){
    super(props)
  }
  handleLogout() {
    this.props.actions.Logout()
    localStorage.clear()
  }
  render() {
    return(
      <div>
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
              <LinkContainer to={'/Login'}>
                <MenuItem>Login Page</MenuItem>
              </LinkContainer>
              <MenuItem eventKey="4.2">Another action</MenuItem>
              <MenuItem eventKey="4.3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4" href='#' onClick={() => {this.handleLogout()}}>LogOut</MenuItem>
            </NavDropdown>
          </Nav>
        }
      </div>)}
}
