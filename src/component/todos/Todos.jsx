import React from 'react';
import Todo from './todo';

const Todos = (props) => {
    return (
        <div>
            {props.todos.map(todo => <Todo todo={todo} key={todo}></Todo>)}
        </div>
    );
};

export default Todos;