import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import combineReducers from './redux/combineReducers'
import createStore from './redux/createStore'

function foo (state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'DE':
      return state - 1;
    default:
      return state;
  }
}

function bar (state = 'INIT', action) {
  switch (action.type) {
    case 'SHOW':
      return state.content;
    default:
      return state;
  }
}

const index = combineReducers({
  foo,
  bar
})

const store = createStore(index);
class Home extends React.Component {
  handleAdd = () => {
    store.dispatch({
      type: 'ADD'
    })
  }
  render() {
    const reduxStore = store.getState();
    return (
      <div>
        foo: {reduxStore.foo}
        bar: {reduxStore.bar}
        <button onClick={this.handleAdd}>+</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
store.subscribe(() => {
  ReactDOM.render(<Home />, document.getElementById('root'));
})
