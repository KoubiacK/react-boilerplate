import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/LoginActions'
import { Link } from 'react-router'
import { Form, FormGroup, FormControl, Checkbox, Button, ControlLabel, Col, Modal } from 'react-bootstrap'


export default class LoginContainer extends Component {
  constructor(){
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
  handleSubmit = (e) => {
    e.preventDefault()

    var email = this.state.userEmail
    var password = this.state.userPassword
    var tkn= 'kiTwt1XsG7'

    //Stockage en local
    localStorage.setItem('auth:user', JSON.stringify(this.state.userEmail))
    localStorage.setItem('auth:tkn', JSON.stringify(tkn))

    //Envoie au redux store
    this.props.actions.Login(email, password, tkn)



  }
render() {
  return (

      <Col sm={12} md={4} mdPush={4}>
        {!this.props.isAuthenticated &&
        <Form horizontal autoComplete="false"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={12}>
              <FormControl type="email" placeholder="Email" name='email' />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={12}>
              <FormControl type="password" placeholder="Password" name ='password' autoComplete="new-password"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>

        </Form>
    }
    {this.props.isAuthenticated &&
      <div
        style={{textAlign: 'center'}}>
      <h2>Connecté !</h2>
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
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
