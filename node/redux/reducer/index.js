const { combineReducers } = require('redux');
const filmReducer = require('./filmReducer');
const filmFilterReducer = require('./filmFilter');

module.exports = combineReducers({
  films: filmReducer,
  filter: filmFilterReducer
})