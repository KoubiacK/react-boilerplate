import React, { Component } from 'react'
import LoginForm from '../components/Forms/Login.jsx'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
//Store
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/LoginActions'

export default class LoginContainer extends Component {
    render() {
      return (
        <div>
          <Col sm={12} md={4} mdPush={4}>
            {!this.props.isAuthenticated &&
            <div>
              <h2>Se connecter</h2>
              <h3 style={{ fontWeight: 100 }}>Pas encore de compte ? <br/>
              <LinkContainer to={'/signup'}><a href='#'>En créer un</a></LinkContainer>
              </h3>
              <LoginForm />
            </div>
              }
              {this.props.isAuthenticated && <div style={{ textAlign: 'center' }}>
              <h2>Bienvenue</h2>
              <p>{this.props.user}</p>
              <Link to='/home'>Retour à l'accueil.</Link>
              </div>
              }
            </Col>
        </div>
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
  mapDispatchToProps
)(LoginContainer)
