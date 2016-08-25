import React, { Component, PropTypes } from 'react'
//Bootstrap imports
import { Form, FormGroup, FormControl, Checkbox, Button, ControlLabel, Col } from 'react-bootstrap'
import { browserHistory } from 'react-router'

export default class LoginForm extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      userMail: null,
      userPass: null,
      isLogged: this.props.login,
    }
  }

  handleChangeMail = (e) => {
    this.setState({userMail: e.target.value})
  }
  handleChangePass = (e) => {
    this.setState({userPass: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.actions.auth()
    this.setState({isLogged: true})
    // browserHistory.push('/home')
  }
  render() {
    var toDisplay = this.state.isLogged ? 'none' : ''
    const {login, actions } = this.props
    return (
      <Col sm={12} md={4} mdPush={4}>
      <Form horizontal autoComplete="off"
      onSubmit={this.handleSubmit}
      login={this.props.login}
      style={{display: toDisplay}}>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={12}>
          <FormControl type="email" placeholder="Email" onChange={this.handleChangeMail}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={12}>
          <FormControl type="password" placeholder="Password" onChange={this.handleChangePass}/>
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
      <p>
      {toDisplay}
    </p>
      </Col>
    )
  }
}
LoginForm.propTypes = {
  login: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
}
