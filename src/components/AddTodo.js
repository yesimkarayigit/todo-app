import React, { useState } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

const AddTodo = (props) => {
  const [text, setText] = useState('');

  return (
    <div className="add-todo-wrapper">
      <input 
        placeholder="Add item"
        value={text} 
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('')
        props.addTodo(text)} }>Add</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    list: state.list,
  }
}

export default connect(mapStateToProps, { addTodo })(AddTodo);