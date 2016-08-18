import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { Image, ButtonToolbar, Button, Carousel, Grid, Row, Col } from 'react-bootstrap'
//Redux
import { createStore, combineReducers } from 'redux'
import reducer from '../reducers'
import { style } from './App.css' // import css

// custom component
import NavBar from '../NavBar/NavBar.jsx'

var store_1 = createStore(reducer, {counter: 0},window.devToolsExtension && window.devToolsExtension())
// import json config
var julha_config = require('json!.././.././julha_config.json')

console.log('Store state after initialisation:', store_1.getState())
class App extends Component {
constructor(props) {
  super()
  this.state = {counter: store_1.getState().counter}
  this.increment = this.increment.bind(this)
  this.decrement = this.decrement.bind(this)
}

increment() {
  store_1.dispatch({type: 'INCREMENT'})
  this.setState({counter: store_1.getState().counter})
}
decrement() {
  if (this.state.counter >= 1) {
    store_1.dispatch({type: 'DECREMENT'})
    this.setState({counter: store_1.getState().counter})
    }
    else { alert('Déjà à 0 !') }

}
    // global variable, accessible in all child with .contextTypes
    getChildContext() {
        return { julha_config: julha_config } // config
    }


    render() {

        return (
  <div className="app-container">

    <NavBar />

    <Grid style={{background: '#f8f8f8'}}>
      <h2>App [Inner]</h2>

      <Row className="show-grid">
        <Col xs={12} md={4}><Image src="http://loremflickr.com/360/200/deep,space" responsive thumbnail /></Col>
        <Col xs={12} md={4}><Image src="http://loremflickr.com/360/200/deep,space?random=1" responsive thumbnail /></Col>
        <Col xs={12} md={4}><Image src="http://loremflickr.com/360/200/deep,space?random=2" responsive thumbnail /></Col>
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

      {this.props.children}

    </Grid>

  </div>
        )
    }
}


// global variable, accessible in all child with .contextTypes
App.childContextTypes = {
    julha_config: React.PropTypes.object.isRequired
}

// export the component
export default App
