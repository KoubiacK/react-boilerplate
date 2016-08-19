import React, { Component } from 'react'
import { Link } from 'react-router'
import { Row, Col, Form, FormGroup, FieldGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import Users from './users.json'
export default class Login extends Component {
  constructor(props){
    super(props)
  }

   formSubmit(e) {
     console.log('Submitted')
     debugger
   }
  render() {
    return (
      <div>
        <h2>Login</h2>
        <Row>
        <Col md={4} xsOffset={4}>
        <Form horizontal onSubmit={this.formSubmit.bind(this)}>
          <FormGroup controlId='formValidationLogin' validationState='' bsSize='large'>
            <ControlLabel xs={2}>Login:</ControlLabel>
            <FormControl type='text' placeholder='Login..' xs={10} />
          </FormGroup>
            <FormGroup controlId='formValidationPassword' validationState='' bsSize='large'>
            <ControlLabel>Password:</ControlLabel>
            <FormControl type='password' placeholder='Password..' />
          </FormGroup>
          <FormGroup>
            <Button type='submit' bsSize='large'>Envoyer</Button>
          </FormGroup>
        </Form>
        </Col>
        </Row>
      </div>
    )
  }
}
