import React from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import './assets/style.scss';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
