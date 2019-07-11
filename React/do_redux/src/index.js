import { state } from './redux/state.js'
import { storeChange } from './redux/storeChange.js';
import { createStore } from './redux/createStore.js';

const { store, dispatch, subscribe } = createStore(state, storeChange);

function renderHead(state) {
  console.log('render Head')
  //两个函数组件
  const head = document.getElementById('head');
  head.innerText = state.text;
  head.style.color = state.color;
  //随意的修改
  // state.body.text = '我是经过 head修改的 body'
}

function renderBody(state) {
  console.log('render Body')
  const body = document.getElementById('body');
  body.innerText = state.text;
  body.style.color = state.color;
}
function renderApp(store, oldStore = {}) {
  if (store === oldStore) return;
  if (store.head !== oldStore.head)
    renderHead(store.head);
  if (store.body !== oldStore.body)
    renderBody(store.body);
}
subscribe((newStore, store) => renderApp(newStore, store));
renderApp(store);
dispatch({ type: 'BODY_TEXT', text: '我是经过 head修改的 body' })
// renderApp(store); 性能开销
