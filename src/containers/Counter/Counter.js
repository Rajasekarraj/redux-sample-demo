import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.addCounterWithFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.subtractCounterWithFive}  />
                <button onClick={this.props.storeResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((strResult, id) => {
                        return <li key = {id} onClick={() => this.props.deleteResult(id)}>{strResult}</li>
                    })}
                </ul>
            </div>
        );
    }
}

let mapPropsToState = store => {
    return {
        ctr: store.counter,
        storedResults: store.results
    }
}

let mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch(actionCreators.increment()),
        decrementCounter: () => dispatch(actionCreators.decrement()),
        addCounterWithFive: () => dispatch(actionCreators.addFive()),
        subtractCounterWithFive: () => dispatch(actionCreators.subtractFive()),
        storeResult: () => dispatch(actionCreators.storeResult()),
        deleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(Counter);