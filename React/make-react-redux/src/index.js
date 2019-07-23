import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Provider from './react-redux/Provider';
import './index.css';
import App from './App';
function countReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(countReducer);
// store.subscribe(()=> {
//   console.log(store.getState());
// })
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

