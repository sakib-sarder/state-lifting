import React, { useState } from "react";

const NewTodo = (props) => {
    const [todo, setTodo] = useState('');
    const handleInput = (e) => {
        setTodo(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo)
    }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">New Todo: </label>
          <input type="text" id="todo" name="todo" value={todo} onChange={handleInput} />
          <button style={{marginLeft: '5px'}}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
