import React, {Component} from 'react';
import './item-status-filter.scss';
import PropTypes from 'prop-types';

export default class ItemStatusfilter extends Component{

    static propTypes = {
        filter: PropTypes.string,
        setFilter: PropTypes.func
    };

    buttons = [
        {name: 'all', label: 'All', id: 1},
        {name: 'active', label: 'Active', id: 2},
        {name: 'done', label: 'Done', id: 3}
    ];

    render() {
        const {filter, setFilter} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const clazz = filter === name ? "btn btn-info" : "btn btn-outline-secondary";
            return <button 
            key={name} 
            type="button" 
            className={clazz}
            onClick={() => setFilter(name)}>{label}</button>;
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

