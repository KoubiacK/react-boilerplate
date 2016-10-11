import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Checkbox, Button, ControlLabel, Col, Alert, Fade } from 'react-bootstrap'
import * as auth from '../../api/auth/auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as LoginActions from '../../actions/LoginActions'
export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      userEmail: '',
      userPassword: '',
      Error: { status: false, message: '' }
    }
  }

  handleChange = (e) => {
    switch (e.target.name) {
    case 'email':
      this.setState({ userEmail: e.target.value })
      break
    case 'password':
      this.setState({ userPassword: e.target.value })
      break
    default:
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let data = { email: this.state.userEmail, password: this.state.userPassword }
    let that = this

    auth.login(data, that)
  }

  render() {
    let Error = this.state.Error.status === true
    ? <Fade in='true'><Alert bsStyle='danger' style={{ display: 'block' }}>{ this.state.Error.message}</Alert></Fade>
    : null
    return(
      <div>
          { Error }
          <Form horizontal autoComplete='false' onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <FormGroup controlId='formHorizontalEmail'>
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={12}>
                <FormControl type='email' placeholder='Email' name='email'/>
              </Col>
            </FormGroup>
            <FormGroup controlId='formHorizontalPassword'>
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={12}>
                <FormControl type='password' placeholder='Password' name='password' autoComplete='new-password'/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={3} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={3} sm={10}>
                <Button type='submit'>
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
      </div>
    )}
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}
export default connect(
  null,
  mapDispatchToProps
)(LoginForm)
