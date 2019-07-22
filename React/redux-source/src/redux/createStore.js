
export const createStore = (reducer, preloadedState, enhancer) => {
  if(typeof preloadedState === "function" && enhancer === undefined) {
    enhancer = preloadedState;
    preloadedState = undefined;
  }
  const listeners = []  //组件
  let store = preloadedState
  const subscribe = (listen) => listeners.push(listen)
  //发布订阅者
  const dispatch = (action) => {
    store = reducer(store, action)
    // 新的
    listeners.forEach(item => {
      item()
    })
  }
  const getState = () => {
    return store
  }
  dispatch({ type: '@@redux/INIT' })
  return { store, dispatch, subscribe, getState };
}

export default createStore