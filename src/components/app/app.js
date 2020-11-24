import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusfilter from '../item-status-filter';
import './app.scss';
const App = () => {

    const todoData = [
        {id:1, label: 'Drink Coffe', important: false},
        {id:2, label: 'Make awesome app', important: true},
        {id:3, label: 'Have a lunch', important: false}
    ];


    return (
    <div className="todo-app">
        <AppHeader/>
        <div className="top-panel d-flex">
            <SearchPanel/>
            <ItemStatusfilter/>
        </div>

        <TodoList todos={todoData}/>
    </div>
    );
};

export default App;