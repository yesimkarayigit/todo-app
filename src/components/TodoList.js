import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { toggleTodo, deleteTodo } from '../store/actions';

const TodoList = (props) => {
  return (
    <div className="todo-list-wrapper">
      { props.list.map((todo) => {
        const todoStyle = clsx({ "completed": todo.isCompleted })

        return (
          <div key={todo.id} >
            <span className={todoStyle}>{todo.text}</span>
            <span onClick={() => props.toggleTodo(todo.id)}>{todo.isCompleted ? '👏' :'✅' }</span>
            <span onClick={() => props.deleteTodo(todo.id)}>🔥</span>
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