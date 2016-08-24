import React, { Component, PropTypes } from 'react'
//Bootstap imports
import { Row, Col, ButtonToolbar, Button, ProgressBar } from 'react-bootstrap'
export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  render() {
    const now = this.props.counter * 10
    return (
      <Row>
        <Col xs={12} md={4} mdPush={4}>
          <div className="counter-num-label">
            <h1
              style={{textAlign: 'center'}}>
              {this.props.counter}
            </h1>

            </div>
          {/* Below, the even or odd statement is simply used to demonstrate how one could
            easily use a ternary operator to conditionally show an 'even' or 'odd' string
            based on the counter's value on state. */}
            <div className="counter-even-label">
              <h4
                style={{textAlign: 'center'}}>
                {this.props.counter % 2 === 0 ? 'even' : 'odd'}
              </h4>
            </div>
            <br />
            <Col xs={12} md={12}>
              <ButtonToolbar
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'}}>
                <Button style={{
                    width: '80px'}}
                    onClick={() => {this.handleDecrement();}}>-</Button>
                <Button style={{
                    width: '80px'}}
                    onClick={() => {this.handleIncrement();}}>+</Button>
                </ButtonToolbar>
                <br/>
                <ProgressBar now={now} label={this.props.counter} />
              </Col>
        </Col>
      </Row>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}
