import React, {Component} from 'react';
import './search-panel.scss';
import PropTypes from 'prop-types';

export default class SearchPanel extends Component{

    static propTypes = {
        onSearchChange: PropTypes.func.isRequired
    };

    state = {
        term: ''
    };

    changeTerm = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input
            value={this.state.term} 
            onChange={this.changeTerm} 
            className='search-panel'
            placeholder="search"/>
        );
    }
}


