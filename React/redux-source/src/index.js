import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from './redux-thunk/index';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from './redux/index'
// import { createStore, combineReducers, applyMiddleware } from 'redux'

function foo(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'DE':
      return state - 1;
    default:
      return state
  }
}
function bar(state = 'INIT', action) {
  switch (action.type) {
    case 'CHANGE':
      return action.content;
    default:
      return state
  }
}
const index = combineReducers({
  foo,
  bar
})
// const logger = ({dispatch, getState}) => next => action => {
//   console.log('[logger即将执行:]'+ )
// }
const store = createStore(index, applyMiddleware(ReduxThunk))
class Home extends React.Component {
  handleAdd = () => {
    store.dispatch({
      type: 'ADD'
    })
  }
  handleAddAsync = () => {
    const asyncAdd = (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: 'ADD'
        })
      }, 1000);
    }
    store.dispatch(asyncAdd);
  }
  render() {
    const reduxStore = store.getState()
    return (
      <div>
        foo: {reduxStore.foo}
        bar: {reduxStore.bar}
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleAddAsync}>async add</button>
      </div>
    )
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));
store.subscribe(() => {
  ReactDOM.render(<Home />, document.getElementById('root'));
})