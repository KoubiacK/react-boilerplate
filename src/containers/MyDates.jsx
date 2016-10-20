import React, { Component } from 'react'
import { PageHeader, Table, ButtonGroup, Button, Glyphicon, Modal } from 'react-bootstrap'

export default class MyDates extends Component {
  constructor(props) {
    super(props)
    this.state = { show: true }
  }
  addDate = () => {
    this.setState({ show: true })
  }
  close = () => {
    this.setState({ show: false })
  }
  render() {
    return(
      <div>
        <PageHeader>Dates</PageHeader>
        <ButtonGroup>
          <Button><Glyphicon glyph='th-large' /></Button>
          <Button onClick={this.addDate}><Glyphicon glyph='plus' /></Button>
          <Button><Glyphicon glyph='question-sign' /></Button>
        </ButtonGroup>
          <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan='2'>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
      </Table>
      <Modal show={this.state.show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter une date</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <hr />

            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )}
}
