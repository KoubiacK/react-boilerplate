import React, { Component } from 'react'
import { Link } from 'react-router'
import { Row, Col, Form, FormGroup, FieldGroup, ControlLabel, FormControl, Glyphicon, Button } from 'react-bootstrap'
//Redux
import { createStore } from 'redux'
import reducer from '../reducers'

//Create store
let UserStore = createStore(reducer, {user: ''},window.devToolsExtension && window.devToolsExtension())


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
    formChange(e) { //Form Control
      var formLogin = document.getElementById('formValidationLogin').value
      //Login Lenght
      formLogin.length <= 3 ?
      this.setState({formLoginIsValid: 'error'}) :
      this.setState({formLoginIsValid: 'success'})
    }

   formSubmit(e) {
     var formLogin = document.getElementById('formValidationLogin').value
     e.preventDefault()
     var userList = require('json!./users.json') //Get userList

     //Loop
     userList.users.map(user => (
       //Comparison using Ternary
       user.name == formLogin ?
       this.setState({user: {Id: user.id,             //  ##########################
                            name: user.name,          //  Put User Infos in state ##
                            password: user.password}  //  ##########################
       }) :  ''
     ))

    //Password Verification
    var formPass = document.getElementById('formValidationPassword').value
    console.log(this.state.user.password)
   }

  render() {
    console.log(UserStore.getState()) //Debug UserStore
    return (
      <div>
        <h2>Login</h2>
        <Row>
        <Col md={4} xsOffset={4}>
        <Form horizontal onChange={this.formChange.bind(this)} onSubmit={this.formSubmit.bind(this)}>
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
