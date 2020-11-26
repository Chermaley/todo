import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './todo-list-item.scss';


export default class TodoListItem extends Component {

    static propTypes = {
        label: PropTypes.string,
        important: PropTypes.bool,
        done: PropTypes.bool,
        onDeleted: PropTypes.func.isRequired,
        onImportant: PropTypes.func.isRequired,
        onFinished: PropTypes.func.isRequired
    };

    render() {
        const {label, important, onImportant, done, onDeleted, onFinished} = this.props;

        let className = 'todo-list-item';
        
        if (done) {
            className += ' done';
        }
        if (important) {
            className += ' important';
        }

        return (
            <span className={className}>
                <span className="todo-list-item-label" 
                onClick={onFinished}>
                    {label}
                </span>

                <button onClick={onImportant} type='button' className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"/>
                </button>

                <button onClick={onDeleted} type='button' className="btn mr-20 btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash"/>
                </button>

            </span>
        );
    }
}

