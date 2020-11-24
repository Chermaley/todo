import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './todo-list-item.scss';


export default class TodoListItem extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        important: PropTypes.bool.isRequired,
        onDeleted: PropTypes.func.isRequired
    };

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            };
        });
    };

    onImportant = () => {
        this.setState(({important})=> {
            return {
                important: !important
            };
        });
    };

    render() {
        const {label} = this.props;
        const {important, done} = this.state;

        
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
                onClick={this.onLabelClick}>
                    {label}
                </span>

                <button onClick={this.onImportant} type='button' className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"/>
                </button>

                <button onClick={this.props.onDeleted} type='button' className="btn mr-20 btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash"/>
                </button>

            </span>
        );
    }
}

