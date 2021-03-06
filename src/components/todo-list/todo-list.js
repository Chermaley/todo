
import React from 'react';
import TodoListItem from '../todo-list-item';
import PropTypes from 'prop-types';
import './todo-list.scss';
const TodoList = ({todos, onDeleted, onImportant, onFinished}) => {

    const elements =  todos.map((item) => { 
        const {id, ...itemProps} = item;

        return (
            <li className="list-group-item" key={id}>
                <TodoListItem 
                {...itemProps}
                onDeleted={() => onDeleted(id)}
                onImportant={() => onImportant(id)}
                onFinished={() => onFinished(id)}
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
    onDeleted: PropTypes.func.isRequired,
    onImportant: PropTypes.func.isRequired,
    onFinished: PropTypes.func.isRequired
};

export default TodoList;