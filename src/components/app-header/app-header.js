
import PropTypes from 'prop-types';

import React from 'react';
import './app-header.scss';
const AppHeader = ({toDo, done}) => {
    return (
        <div className="app-header">
            <h1 className="app-header-title">My Todo List</h1>
            <span className="app-header-counter">{toDo} more to do, {done} done</span>
        </div>
    );
};

AppHeader.propTypes = {
    toDo: PropTypes.number.isRequired,
    done: PropTypes.number.isRequired
};

export default AppHeader;