import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/LoginActions'
import { Link } from 'react-router'
import { Form, FormGroup, FormControl, Checkbox, Button, ControlLabel, Col, Modal } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import * as auth from '../api/auth/auth'

export default class LoginContainer extends Component {
    constructor() {
        super()
        this.state = {
            userEmail: '',
            userPassword: ''
        }
    }

    handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                this.setState({userEmail: e.target.value})
                break
            case 'password':
                this.setState({userPassword: e.target.value})
                break
            default:
        }

    }
    handleSubmit = (e) => { //Attention aucune validation !!!
        e.preventDefault()

        //Reset Validation errors
        this.setState({Valid_email: ''})
        this.setState({Valid_password: ''})

        var data = { email: this.state.userEmail, password: this.state.userPassword },
            that = this

        auth.login(data, that) //<= /api/auth.js
    }
    render() {
        return (
            <Col sm={12} md={4} mdPush={4}>
                {!this.props.isAuthenticated &&
                  <div>
                  <h2>Se connecter</h2>
                  <h3 style={{fontWeight: 100}}>Pas encore de compte ? <br/> <LinkContainer to={'/signup'}><a href='#'>En créer un</a></LinkContainer></h3>
                  <span>Test</span>
                  <Form horizontal autoComplete="false" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                      <FormGroup controlId="formHorizontalEmail" >
                          <Col componentClass={ControlLabel} sm={2}>
                              Email
                          </Col>
                          <Col sm={12}>
                            <FormControl type="email" placeholder="Email" name='email'/>
                          </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword" >
                          <Col componentClass={ControlLabel} sm={2}>
                          Password
                          </Col>
                          <Col sm={12}>
                            <FormControl type="password" placeholder="Password" name='password' autoComplete="new-password"/>
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col sm={12} md={12}>
                              <Button style={{width: '100%'}}type="submit">
                                  Sign in
                              </Button>
                          </Col>
                        </FormGroup>
                    </Form>
                    </div>
                }
                {this.props.isAuthenticated && <div style={{ textAlign: 'center' }}>
                    <h2>Bienvenue</h2>
                    <p>{this.props.user}</p>
                    <Link to='/home'>Retour à l'accueil.</Link>
                </div>
            }
          </Col>
        )
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
  token: state.login.token,
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
