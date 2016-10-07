import React, { Component } from 'react'
//Bootstap imports
import { Col, PageHeader, Form, FormGroup, FormControl, Image } from 'react-bootstrap'
//auth
import * as auth from '../api/auth/auth'
import CryptoJS from 'crypto-js'
export default class Profil extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  componentDidMount() {
    let credentials = localStorage.getItem('auth:tkn').split('.', 2)
    let data = { ID: credentials[0], hash: credentials[1] }
    let hash = data.hash
    let that = this
    auth.getProfil(hash, that)
  }

  render() {
    let Email = 'banditwashere@hotmail.com'.trim().toLowerCase()
    let md5Mail = CryptoJS.MD5(Email)
    let gravatar = 'https://fr.gravatar.com/avatar/' + md5Mail.toString() + '?s=100'
    return(
      <Col xs={12} md={12}>
        <PageHeader>Profil</PageHeader>
        <Image src={gravatar.toString()} rounded responsive style={{ 'margin': '0 auto' }}/>
      <Form>
          <FormGroup>
            <Col md={2}>Email :</Col>
            <Col md={5}>
              <FormControl type='' value={Email} onChange={this.onchange}/>
            </Col>
          </FormGroup>
        </Form>
      </Col>)}
}
