import React, { useState } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

const AddTodo = (props) => {
  const [text, setText] = useState('');

  const addingTodo = () => {
    if (!text && text.length < 1) return;

    setText('');
    props.addTodo(text);
  }


  const handleKeypress = e => {
    if (e.charCode === 13) {
      addingTodo();
    }
  };

  return (
    <div className="add-todo-wrapper">
      <input 
        placeholder="New things"
        value={text} 
        onChange={e => setText(e.target.value)}
        className="add-todo-input"
        onKeyPress={handleKeypress}
      />
      <button className="add-todo-button" onClick={addingTodo}>Add</button>
    </div>
  )
}

export default connect(null, { addTodo })(AddTodo);
