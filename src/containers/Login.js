import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../actions/LoginActions'
import { Form, FormGroup, FormControl, Checkbox, Button, ControlLabel, Col } from 'react-bootstrap'
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
    console.log(email, password);
    this.props.actions.Authenticate(email, password, tkn)
    browserHistory.push('/home')
  }
render() {
  return (
    <Col sm={12} md={4} mdPush={4}>
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

      </Col>
  )
}
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isAuthenticated
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
