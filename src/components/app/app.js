import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusfilter from '../item-status-filter';
import './app.scss';

export default class App extends Component{
    state = {
        todoData: [
            {id:1, label: 'Drink Coffe', important: false},
            {id:2, label: 'Make awesome app', important: true},
            {id:3, label: 'Have a lunch', important: false}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newData = [
                ...todoData.slice(0, idx), ... todoData.slice(idx + 1)
            ];
            return {
                todoData: newData
            };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={1}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusfilter/>
                </div>
                <TodoList 
                todos={this.state.todoData}
                onDeleted={this.deleteItem}
                />
            </div>
        );
    }
}

