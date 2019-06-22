import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import Counter from './Counter'
import countReducer from './reducer'
import * as serviceWorker from './serviceWorker';

function renderCount() {
  ReactDOM.render(<Counter
    value={store.getState()}
    onIncrement={() => {
      store.dispatch({ type: 'INCREMENT' })
    }}
    onDecrement={() => {
      store.dispatch({ type: 'DECREMENT' })
    }}
    />, document.getElementById('redux'));
}

let store = createStore(countReducer);
ReactDOM.render(<App />, document.getElementById('root'));
renderCount();
store.subscribe(() => {
  renderCount();
  console.log(store.getState());
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
