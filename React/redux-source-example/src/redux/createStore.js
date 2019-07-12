const createStore =  (reducer, preloadedState) => {
  var listeners = []; // 组件
  let store = preloadedState;
  // listen callback
  const subscribe = (listen) => listeners.push(listen)// 订阅发布者
  const dispatch = (action) => {
    store = reducer(store, action);
    // 新的
    listeners.forEach(item => {
      item();
    })
  }
  const getState = () => {
    return store;
  }
  return { store, dispatch, subscribe, getState }
}
export default createStore;