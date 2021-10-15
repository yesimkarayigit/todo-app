import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import { addTodo } from './store/actions';
import Header from './components/Header';
import './assets/style.scss';

const App = (props) => {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <h1>TODO App</h1>
      <Header />
      <div className="add-todo-container">
        <input 
          placeholder="Add item" 
          value={text} 
          onChange={e => setText(e.target.value)}
        />
        <button onClick={() => {
          setText('')
          props.addTodo(text)} }>Add</button>
      </div>
      <TodoList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    list: state.list,
  }
}

export default connect(mapStateToProps, { addTodo })(App);
