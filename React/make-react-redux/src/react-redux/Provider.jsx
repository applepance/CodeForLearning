import React, { Component } from 'react';
import { Provider } from './context';

class EnhancedProvider extends Component {
  constructor(props) {
    super(props)
    const { store } = this.props;
    this.state = {
      state: store.getState(),
      dispatch: store.dispatch
    }
    store.subscribe(() => {
      this.setState({
        state: store.getState()
      })
    })
  }
  render() {
    const { state, dispatch } = this.state;
    return (
      <Provider value={{ state, dispatch }}>
        { this.props.children }
      </Provider>
    )
  }
}

export default EnhancedProvider;