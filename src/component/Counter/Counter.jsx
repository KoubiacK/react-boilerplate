import React, { Component } from 'react'
import { Col, Row, ButtonToolbar, Button, Image } from 'react-bootstrap'

export default class Counter extends Component {
  constructor(props) {
    super()
    this.state = {counter: 0}
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  componentWillMount() {
      //console.log(this.context.julha_config);
      // before rendering, set the state of the component
      const store = this.context.store
      this.setState(this.context.store)
  }
  increment() {
    this.context.store.dispatch({type: 'INCREMENT'})
    this.setState({counter: this.context.store.getState().counter})
  }

  decrement() {
    if (this.state.counter != 0) {
      this.context.store.dispatch({type: 'DECREMENT'})
      this.setState({counter: this.context.store.getState().counter})
      }
    else {
      alert('Déjà à 0 !')
    }
  }

  render() {
    return(
      <div>
      <h2>App [Inner]</h2>

      <Row className="show-grid">
        <Col xs={12} md={4}><Image src="http://lorempicsum.com/up/350/200/1" responsive thumbnail /></Col>
        <Col xs={12} md={4}><Image src="http://lorempicsum.com/nemo/350/200/1" responsive thumbnail /></Col>
        <Col xs={12} md={4}><Image src="http://lorempicsum.com/futurama/350/200/1" responsive thumbnail /></Col>
      </Row>
      <Row>
        <Col md={9}>
          <h2>Grid</h2>
          <Col xs={12} md={3}><code>&lt;{'Col xs={12} md={3}'} /&gt;</code></Col>
          <Col xs={12} md={3}><code>&lt;{'Col xs={12} md={3}'} /&gt;</code></Col>
          <Col xs={12} md={3}><code>&lt;{'Col xs={12} md={3}'} /&gt;</code></Col>
          <Col xs={12} md={3}><code>&lt;{'Col xs={12} md={3}'} /&gt;</code></Col>
        </Col>
          <Col md={3}>
          <h2>Counter</h2>
          <h1 style={{textAlign: 'center'}}>{this.state.counter}</h1>
          <br/>
          <ButtonToolbar>
            <Col md={6}><Button onClick={this.increment}>INCREMENT</Button></Col>
            <Col md={6}><Button onClick={this.decrement}>DECREMENT</Button></Col>
          </ButtonToolbar>
          <br />
        </Col>
      </Row>
      </div>
    )
  }
}
Counter.contextTypes = {
  store: React.PropTypes.object.isRequired
}
