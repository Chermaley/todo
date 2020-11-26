import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusfilter from '../item-status-filter';
import AddItem from '../add-item';
import './app.scss';

export default class App extends Component{

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffe'),
            this.createTodoItem('Drink Coffe'),
            this.createTodoItem('Drink Coffe')
        ],
        filter: 'all',
        term: ''
    };

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label,
            done: false,
            important: false
        };
    }

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

    addItem = (text) => {
        if (text.length > 0) {
            const item = this.createTodoItem(text);
            this.setState(({todoData})=> {
                const newData = [
                    ...todoData, item
                ];
                return {
                    todoData: newData
                };
            });
        }
    };

    toggleStatus = (id, param) => {
        this.setState(({todoData})=> {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, [param]: !oldItem[param]};
            const newData = [
                ...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newData
            };
        });
    };

    toggleImportant = (id) => {
        this.toggleStatus(id, 'important');
    };

    toggleFinished = (id) => {
        this.toggleStatus(id, 'done');
    };

    setFilter = (sortType) => {
        this.setState({filter: sortType}); 
    };

    sort = (arr, term) => {
        if (term !== '') {
        return arr.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
        }
        return arr;
    };

    changeTerm = (term) => {
        this.setState({term});
    };

    render() {
        const {todoData, filter, term} = this.state;
        const todoCount = todoData.length;
        const todoDoneCount = todoData.filter(item => item.done).length;

        let content;
        switch (filter) {
            case 'all':
                content = todoData;
            break;
            case 'done':
                content = todoData.filter(item => item.done);
            break;
            case 'active':
                content = todoData.filter(item => !item.done);
            break;
        }

        const visibleItems = this.sort(content, term);
        
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={todoDoneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                    onSearchChange={this.changeTerm}/>
                    <ItemStatusfilter
                    filter={filter}
                    setFilter={this.setFilter}
                    />
                </div>
                <TodoList 
                todos={visibleItems}
                onDeleted={this.deleteItem}
                onImportant={this.toggleImportant}
                onFinished={this.toggleFinished}
                />
                <AddItem onAddItem={this.addItem}/>
            </div>
        );
    }
}

