
import React from 'react';
import TodoListItem from '../todo-list-item';
import PropTypes from 'prop-types';
import './todo-list.scss';
const TodoList = ({todos, onDeleted}) => {

    const elements =  todos.map((item) => { 
        const {id, ...itemProps} = item;

        return (
            <li className="list-group-item" key={id}>
                <TodoListItem 
                {...itemProps}
                onDeleted={() => onDeleted(id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
           {elements}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onDeleted: PropTypes.func.isRequired
};

export default TodoList;