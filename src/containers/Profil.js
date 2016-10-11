import React, { Component } from 'react'
//Bootstap imports
import { Col, PageHeader, Form, FormGroup, FormControl, Button, Image, ControlLabel, Alert } from 'react-bootstrap'
//auth
import * as auth from '../api/auth/auth'
import CryptoJS from 'crypto-js'
import update from 'immutability-helper'

function getGravatar(email) {
  let string = email.trim().toLowerCase()
  let md5Mail = CryptoJS.MD5(string)
  let gravatar = 'https://fr.gravatar.com/avatar/' + md5Mail.toString() + '?s=175'
  return gravatar
}


export default class Profil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      User: { email: '', avatar: '' },
      Error: { status: false, message: '' },
      InputValues: { firstName: '', lastName: '', email: '', password1: '', password2: '' }
    }
  }
  componentWillMount() {
    let credentials = localStorage.getItem('auth:tkn').split('.', 2)
    let data = { ID: credentials[0], hash: credentials[1] }
    let hash = data.hash
    let that = this
    auth.getProfil(hash, that)
  }
  handleChange = (e) => {
    switch (e.target.id) {
    case 'firstName':
      let firstName = update(this.state.InputValues, { firstName: { $set: e.target.value } })
      this.setState({ InputValues: firstName })
      break
    case 'lastName':
      let lastName = update(this.state.InputValues, { lastName: { $set: e.target.value } })
      this.setState({ InputValues: lastName })
      break
    case 'email':
      let email = update(this.state.InputValues, { email: { $set: e.target.value } })
      this.setState({ InputValues: email })
      break
    case 'password1':
      let password1 = update(this.state.InputValues, { password1: { $set: e.target.value } })
      this.setState({ InputValues: password1 })
      break
    case 'password2':
      let password2 = update(this.state.InputValues, { password2: { $set: e.target.value } })
      this.setState({ InputValues: password2 })
      break
    default:
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let p1 = this.state.InputValues.password1
    let p2 = this.state.InputValues.password2
    console.log('P1 :', p1)
    console.log('P2 :', p2)
    if (p1 !== p2) {
      this.setState({ Error: { status: true, message: 'Les Mot de passes ne correspondent pas !' } })
    } else {
      this.setState({ Error: { status: false, message: '' } })
    }
  }
  render() {
    let Error = this.state.Error.status === true
    ? <Alert bsStyle='danger' style={{ display: 'block' }}>{ this.state.Error.message}</Alert>
    : null

    this.state.User.avatar = getGravatar(this.state.User.email)
    console.log('render !')
    return(
      <Col xs={12} md={12}>
        <PageHeader>Profil</PageHeader>
        <Col xs={12} md={4} style={{ textAlign: 'center' }}>
        <Image src={this.state.User.avatar.toString()} circle responsive style={{ margin: '0 auto' }}/>
        <span>Changer d'avatar</span>
        </Col>
        <Col xs={12} md={8}>
          { Error }

      <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Prénom:</ControlLabel>
              <FormControl id='firstName' type='text' value={ this.state.InputValues.firstName } onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Nom:</ControlLabel>
              <FormControl id='lastName' type='text' value={ this.state.InputValues.lastName } onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Email:</ControlLabel>
              <FormControl id='email' type='email' value={ this.state.InputValues.email } onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Mot de Passe:</ControlLabel>
              <FormControl id='password1' type='password' value={ this.state.InputValues.password1 } onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Mot de Passe:</ControlLabel>
              <FormControl id='password2' type='password' value={ this.state.InputValues.password2 } onChange={this.handleChange} />
          </FormGroup>
          <Button type='submit'>
            Enregistrer
          </Button>
        </Form>
        </Col>
      </Col>)}
}
