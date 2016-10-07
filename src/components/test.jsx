import React, { Component } from 'react'
const state1 = {
  input1: 'minuscule',
  input2: 'Bukkake'
}
const state2 = {
  input1: 'MAJUSCULE',
  input2: 'BUKKAKKE'
}
export default class InputsTest extends Component {
  constructor(props) {
    super(props);
    this.state = state1
  }
  handleChange = (e) => {
    let id = e.target.value
    console.log(id);
    if (id === 'Init1') {
      this.setState(state1)
    } else if (id === 'Init2') {
      this.setState(state2)
    }
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Initialisation des valeur du formulaire</td>
              <td>
                <select
                  name="init"
                  defaultValue={1}
                  onChange={this.handleChange}
                  >
                  <option value="Init1">Init1</option>
                  <option value="Init2">Init2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Input 1 <code>{'defaultValue={this.state.input1}'}</code></td>
              <td>
                <input type="text"
                  name="input1"
                  ref='input1'
                  defaultValue={this.state.input1}
                  required/>
              </td>
            </tr>
            <tr>
              <td>Input 2 <code>{'value={this.state.input2}  onChange={(e) => {this.setState({input2: target.name})}}'}</code></td>
              <td>
                <input type="text"
                  name="input2"
                  ref='input2'
                  defaultValue={this.state.input2}
                  onChange={(e) => {this.setState({input2: e.target.value})}}
                  required/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
