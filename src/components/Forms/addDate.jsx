import React, { Component } from 'react'
import { Modal, Button, Form, FormGroup, FormControl, Col, ControlLabel } from 'react-bootstrap'
//DatePicker
import DatePicker from 'react-bootstrap-date-picker'
import moment from 'moment'
import Geosuggest from 'react-geosuggest'

export default class addDate extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false,
      startDate: moment().toISOString(),
      search: '',
    selectedCoordinate: null }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.modalShow })
  }

  close = () => {
    this.setState({ show: false })
  }
  handleChange = (date) => {
    this.setState({ startDate: date })
  }
onSuggestSelect = (suggest) => {
  console.log(suggest)
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
                <FormGroup controlId='formHorizontalEmail'>
                  <Col componentClass={ControlLabel} sm={12}>
                    Date :
                    <DatePicker dateFormat='DD/MM/YYYY' value={ this.state.startDate } onChange={ this.handleChange }/>
                  </Col>
                </FormGroup>
                <FormGroup controlId='formHorizontalEmail'>
                  <Col componentClass={ControlLabel} sm={12}>
                    Lieu :
                    <Geosuggest
          placeholder='Start typing!'
          initialValue=''
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius='20' />
                  </Col>
                </FormGroup>
                <FormGroup controlId='formHorizontalEmail'>
                  <Col componentClass={ControlLabel} sm={12}>
                    Cachet (brut) :
                    <FormControl type='email' placeholder='Cachet' />
                  </Col>
                </FormGroup>
                <FormGroup controlId='formHorizontalEmail'>
                  <Col componentClass={ControlLabel} sm={12}>
                    Heures :
                    <FormControl type='email' placeholder='Heures' />
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
