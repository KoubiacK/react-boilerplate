import React, { Component } from 'react'
import { PageHeader, Col, Form, FormGroup, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap'
import * as auth from '../api/auth/auth'

export default class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      userEmail: '',
      userPassword: '',
      userPassword2: ''
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
    case 'password2':
      this.setState({ userPassword2: e.target.value })
      break
    default:
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let data = { email: this.state.userEmail, password: this.state.userPassword }
    let that = this.props

    auth.signup(data, that)
  }
  render() {
    return (
      <Col sm={12} md={4} mdPush={4}>
          <PageHeader>SignUp</PageHeader>
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
              <FormGroup controlId='formHorizontalPassword'>
                <Col componentClass={ControlLabel} md={12} sm={2}>
                Verify Password
                </Col>
                <Col sm={12}>
                  <FormControl type='password' placeholder='Verify Password' name='password2' autoComplete='new-password'/>
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
      </Col>
    )
  }
}
