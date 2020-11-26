
import PropTypes from 'prop-types';

import React from 'react';
import './app-header.scss';
import img from'./mushroom.png';
const AppHeader = ({toDo, done}) => {
    return (
        <div className="app-header">
            <img src={img} alt="mushroom"/>
            <h1 className="app-header-title">My Todo List</h1>
            <span className="app-header-counter">{toDo - done} more to do, {done} done</span>
        </div>
    );
};

AppHeader.propTypes = {
    toDo: PropTypes.number.isRequired,
    done: PropTypes.number.isRequired
};

export default AppHeader;