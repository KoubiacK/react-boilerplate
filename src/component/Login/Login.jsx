import React, { Component } from 'react'
import { Link } from 'react-router'
import { Row, Col, Form, FormGroup, FieldGroup, ControlLabel, FormControl, Glyphicon, Button } from 'react-bootstrap'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      isLogged: 'false',
      formLoginIsValid: '',
      formPassIsValid: ''
    }
  }
  // componentWillMount() {}

   formSubmit(e) {
     e.preventDefault()
     var userList = require('json!./users.json') //Get userList

     //Form Control
     var formLogin = document.getElementById('formValidationLogin').value
     var formPass = document.getElementById('formValidationPassword').value
     formLogin.length <= 3 ?
     this.setState({formLoginIsValid: 'error'}) :
     this.setState({formLoginIsValid: 'success'})
     formLogin == null || 'undefined' ?
     this.setState({formPassIsValid: 'error'}) :
     alert('Ok!')

     //Loop
     userList.users.map(user => (
       //Comparison using Ternary
       user.name == formLogin ?
       this.setState({user:
         {Id: user.id, name: user.name, password: user.password} //Put User Infos in state
       }) :  ''
     ))
   }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <Row>
        <Col md={4} xsOffset={4}>
        <Form horizontal onSubmit={this.formSubmit.bind(this)}>
          <FormGroup controlId='formValidationLogin' validationState={this.state.formLoginIsValid} bsSize='large'>
            <ControlLabel xs={2}>Login:</ControlLabel>
            <FormControl type='text' placeholder='Login..' />
            <FormControl.Feedback />
          </FormGroup>
            <FormGroup controlId='formValidationPassword' validationState={this.state.formPassIsValid} bsSize='large'>
            <ControlLabel>Password:</ControlLabel>
            <FormControl type='password' placeholder='Password..' />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup>
            <Button type='submit' bsSize='large'>Envoyer</Button>
          </FormGroup>
        </Form>
        <span></span>
        </Col>
        </Row>
      </div>
    )
  }
}
