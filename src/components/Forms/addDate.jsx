import React, { Component } from 'react'
import { Modal, Button, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap'

export default class addDate extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.modalShow})
  }

  close = () => {
    this.setState({ show: false })
  }
  render() {
    return(
      <div>
        <Modal show={this.state.show} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter une date</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <Form>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={12}>
                    Date :
                    <FormControl type="email" placeholder="Date" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={12}>
                    Lieu :
                    <FormControl type="email" placeholder="Lieu" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={12}>
                    Cachet :
                    <FormControl type="email" placeholder="Cachet" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={12}>
                    Heures :
                    <FormControl type="email" placeholder="Heures" />
                  </Col>
                </FormGroup>
              </Form>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

              <hr />

              </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>)}
}
