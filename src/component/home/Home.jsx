import React, { useState } from 'react';
import NewTodo from '../todos/NewTodo';
import Todos from '../todos/Todos';

const dummyToDos = ['first', 'second'];

const Home = () => {
    const [toDos, setTodos] = useState(dummyToDos);

    const handleNewTodo = (newTodo) => {
        setTodos([...toDos, newTodo])
    }

    return (
        <div>
            <NewTodo onTodo={handleNewTodo}></NewTodo>
            <Todos todos={toDos} />
        </div>
    );
};

export default Home;