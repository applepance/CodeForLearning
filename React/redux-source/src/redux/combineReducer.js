
function combineReducers(reducers) {
  const reducersKeys = Object.keys(reducers)
  let finalReducers = {}
  for (let i = 0, len = reducersKeys.length; i < len; i++) {
    let key = reducersKeys[i]
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducersKeys = Object.keys(finalReducers)
  const nextState = {}
  return function (state = {}, action) {
    for (let j = 0, len = finalReducersKeys.length; j < len; j++) {
      const key = finalReducersKeys[j]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }
    return nextState;
  }
}

export default combineReducers