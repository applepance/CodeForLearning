import React, { Component } from 'react';
import { observable, action, computed, autorun } from 'mobx';
import { observer } from 'mobx-react'

// 任何可以从应用状态中推导出来的东西，都应该自动地推导出来
// {text: '', complete: false, id: 1}
let id = 0;
class Store {
  @observable todos = [];
  @action addTodo(text) {
    this.todos.push({
      text,
      complete: false,
      id: id++
    })
  }
  @action toggleTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].complete = !this.todos[index].complete;
  }
  @computed get totalNumber() {
    return this.todos.length;
  }
  @computed get completedNumber() {
    return this.todos.filter(todo => todo.complete).length;
  }
}
const store = new Store();
autorun(() => {
  console.log('auto run')
  const todos = store.todos;
  localStorage.setItem('todos', JSON.stringify(todos));
})

@observer class ExampleMobx extends Component {
  state = {}
  handleSubmit = () => {
    const value = this.inputNode.value.trim();
    if (value) {
      store.addTodo(value);
    }
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" ref={node => this.inputNode = node} />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
            store.todos.map((todo, index) => {
              return (
                <li key={index} style={{ textDecoration: todo.complete ? 'line-through' : '' }} onClick={() => {
                  store.toggleTodo(todo.id)
                }}>
                  {todo.text}
                </li>
              )
            })
          }
        </ul>
        {
          store.completedNumber
        }/
        {
          store.totalNumber
        }
      </div>
    )
  }
}

export default ExampleMobx;