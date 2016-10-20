import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/CounterActions'
//Bootstap imports
import { PageHeader } from 'react-bootstrap'

class CounterContainer extends Component {
  render() {
    const { counter, actions } = this.props
    return (
      <div>
          <PageHeader>Counter</PageHeader>
          <Counter counter={counter} actions={actions} />
      </div>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer)
