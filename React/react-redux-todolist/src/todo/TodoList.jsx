import React, { Component } from 'react';
import { connect } from 'react-redux';
class TodoList extends Component {
  state = {  }
  render() { 
    const { todos, toggleTo } = this.props;
    return (
      <div>
        {
          todos.map((todo, i) =>{
            return (
              <li key={i}
              onClick={() => {
                toggleTo(todo.id)
              }}
              style={{
                textDecoration: todo.completed ? 'line-through' : ''
              }}
              >{todo.text}</li>
            )
          })
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleTo: id => dispatch({
      type: 'TOGGLE_TODO',
      id
    })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
