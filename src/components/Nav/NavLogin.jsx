import React, { Component } from 'react'
import { Grid, Row, Navbar,Nav, NavItem, NavItemLink, NavDropdown, MenuItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import * as auth from '../../api/auth/auth'

export default class NavLogin extends Component {
  constructor(props){
    super(props)
  }

  handleLogout() {
    var data = { email: this.props.user },
        that = this
    this.props.actions.Logout()
    localStorage.clear()
    auth.LogOut(data, that)
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
              <MenuItem eventKey="4.2">Profil</MenuItem>
              <MenuItem eventKey="4.3">Paramètres</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4" href='#' onClick={() => {this.handleLogout()}}>LogOut</MenuItem>
            </NavDropdown>
          </Nav>
        }
      </div>)}
}
