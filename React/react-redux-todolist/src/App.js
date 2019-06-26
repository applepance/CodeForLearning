import React from 'react';
import AddTo from './todo/AddTo';
import TodoLists from './todo/TodoList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <AddTo />
      <TodoLists />
    </div>
  );
}

export default App;
