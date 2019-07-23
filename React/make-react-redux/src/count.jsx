import React, { Component } from 'react';
import connect from './react-redux/connect';
class Count extends Component {
  state = {}
  render() {
    const {count} = this.props;
    return (
      <div>
        count:{count}
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  count: state
})
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type:'INCREMENT'}),
    decrement: () => dispatch({type:'DECREMENT'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count);