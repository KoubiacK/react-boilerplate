import React, { Component } from 'react'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import * as auth from '../../api/auth/auth'

export default class NavLogin extends Component {
  constructor(props) {
    super(props)
    this.state = { nameToDisplay: '' }
  }
  componentDidUpdate() {
    let name = localStorage.getItem('auth:name') ? true : false
    if (name) {
      let fullname = localStorage.getItem('auth:name').split('.', 2)
      if ((fullname[0]) && (fullname[1])) {
        this.state.nameToDisplay = fullname[0] + ' ' + fullname[1]
      } else {
        this.state.nameToDisplay = this.props.user
      }
    }
  }
  handleLogout() {
    let data = { email: this.props.user }
    let that = this
    this.props.actions.Logout()
    localStorage.clear()
    setTimeout(auth.LogOut(data, that), 700)
  }

  render() {
    return(
      <div>
        {!this.props.isAuthenticated &&
          <Nav pullRight>
            <LinkContainer to={'/Login'}>
              <NavItem href='/login' eventKey='5'>
                Login
              </NavItem>
            </LinkContainer>
          </Nav>
        }
        {this.props.isAuthenticated &&
          <Nav pullRight>
            <NavDropdown eventKey='6' title={ this.state.nameToDisplay } id='nav-dropdown'>
              <LinkContainer to={'/MyDates'}>
                <MenuItem>Mes Dates</MenuItem>
              </LinkContainer>
              <LinkContainer to={'/Profil'}>
                <MenuItem eventKey='6.2'>Profil</MenuItem>
              </LinkContainer>
              <MenuItem eventKey='6.3'>Paramètres</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey='6.4' href='/' onClick={ () => {
                this.handleLogout()
              } }>LogOut</MenuItem>
            </NavDropdown>
          </Nav>
        }
      </div>)}
    }
