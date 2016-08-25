import React, { Component, PropTypes } from 'react'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/LoginActions'

export default class LoginContainer extends Component {
render() {
  const { login, actions } = this.props
  return (
    <LoginForm  login={login} actions={actions} />
  )
}
}

LoginContainer.propTypes = {
  login: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
