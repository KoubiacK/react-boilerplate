import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as LoginActions from '../../actions/LoginActions'

import NavMenu from './NavMenu.jsx'
import NavLogin from './NavLogin.jsx'

export default class NavBar extends Component {

  render() {
    return(
      <Navbar>
        <NavMenu/>
        <NavLogin isAuthenticated={this.props.isAuthenticated} user={this.props.user} actions={this.props.actions}/>
      </Navbar>
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
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(NavBar)
