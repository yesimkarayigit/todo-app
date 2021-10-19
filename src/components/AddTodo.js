import React, { useState } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

const AddTodo = (props) => {
  const [text, setText] = useState('');

  return (
    <div className="add-todo-wrapper">
      <input 
        placeholder="New things"
        value={text} 
        onChange={e => setText(e.target.value)}
        className="add-todo-input"
      />
      <button className="add-todo-button" onClick={() => {
        if (!text && text.length < 1) return;

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
