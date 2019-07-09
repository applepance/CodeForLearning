import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const middlewares = [
  thunkMiddleware,
  createLogger()
];

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}