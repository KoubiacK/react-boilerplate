import React, { Component } from 'react'
//Bootstap imports
import { Row, Col, PageHeader, Image } from 'react-bootstrap'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

render() {
  return (
    <Col xs={12} md={12}>
      <PageHeader>Home</PageHeader>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
         ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
         sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
         est laborum.</p>
        <Row className='show-grid'>
          <Col xs={12} md={4}>
            <Image src='http://lorempicsum.com/up/350/200/1' responsive thumbnail />
            </Col>
          <Col xs={12} md={4}>
            <Image src='http://lorempicsum.com/nemo/350/200/1' responsive thumbnail />
            </Col>
          <Col xs={12} md={4}>
            <Image src='http://lorempicsum.com/futurama/350/200/1' responsive thumbnail />
            </Col>
        </Row>
    </Col>
  )
}
}
