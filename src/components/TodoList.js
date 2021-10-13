import { connect } from 'react-redux';
import clsx from 'clsx';
import { toggleTodo, deleteTodo } from '../store/actions';

const TodoList = (props) => {

  return (
    <div className="todo-list-container">
      { props.list.map((todo) => {
        const todoStyle = clsx({ "completed": todo.isCompleted })

        return (
          <div 
            className={todoStyle} 
            key={todo.id}
          >
            {todo.text}
            <span onClick={() => props.toggleTodo(todo.id)}>✅</span>
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