
import React from 'react';
import TodoListItem from '../todo-list-item';
import PropTypes from 'prop-types';
import './todo-list.scss';
const TodoList = ({todos}) => {

    const elements =  todos.map((item) => { 
        const {id, ...itemProps} = item;

        return (
            <li className="list-group-item" key={id}>
                <TodoListItem {...itemProps}/>
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
    todos: PropTypes.array.isRequired
};

export default TodoList;