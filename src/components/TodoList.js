import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { toggleTodo, deleteTodo } from '../store/actions';

const TodoList = (props) => {
  return (
    <div className="todo-list-wrapper">
      { props.list.map((todo) => {
        const todoStyle = clsx({
          "todo-list-text": true,
          "completed": todo.isCompleted
        })

        return (
          <div className="todo-list-box" key={todo.id} >
            <span className={todoStyle}>{todo.text}</span>
            <div className="todo-list-icon-box">
              <span className="todo-list-icon" onClick={() => props.toggleTodo(todo.id)}>{todo.isCompleted ? '👏' :'✅' }</span>
              <span className="todo-list-icon" onClick={() => props.deleteTodo(todo.id)}>🔥</span>
            </div>
          </div>
        )
      }) }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    list: state.list,
  }
}

export default connect(mapStateToProps, { toggleTodo, deleteTodo })(TodoList);