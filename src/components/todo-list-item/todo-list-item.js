import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './todo-list-item.scss';
class TodoListItem extends Component {
    
    propTypes = {
        label: PropTypes.string.isRequired,
        important: PropTypes.bool.isRequired
    };

    render() {
        const {label, important = false} = this.props;

        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item" >
                <span className="todo-list-item-label" style={style}>
                    {label}
                </span>

                <button type='button' className="btn mr-20 btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash"/>
                </button>

                <button type='button' className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"/>
                </button>

            </span>
            
        );
    }
}

export default TodoListItem;