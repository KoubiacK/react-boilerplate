import React, { Component } from 'react'
import { PageHeader, Table, ButtonGroup, Button, Glyphicon } from 'react-bootstrap'
import AddDate from '../components/Forms/addDate.jsx'
export default class MyDates extends Component {
  constructor(props) {
    super(props)
    this.state = { modalShow: false }
  }
  addDate = () => {
    this.setState({ modalShow: true })
  }
  render() {
    return(
      <div>
        <PageHeader>Dates</PageHeader>
        <AddDate modalShow={this.state.modalShow} />
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
      </div>
    )}
}
