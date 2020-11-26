import React, {Component} from 'react';
import './add-item.scss';
import PropTypes from 'prop-types';

export default class AddItem extends Component {
    static propTypes = {
        onAddItem: PropTypes.func.isRequired
    };

    state = {
        text: ''
    };


    handleChange = (event) => {
        this.setState({text : event.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.text);
        this.setState({text: ''});
    };

    render() {
        return (
            <form className="add-item"
            onSubmit={this.onSubmit}>
                <input 
                placeholder="What need to be done?"
                value={this.state.text} 
                onChange={this.handleChange}
                onKeyDown={this.enterPress}/>
                <button 
                className="btn btn-outline-success">
                    Add to list
                </button>
            </form>
        );
    }
}