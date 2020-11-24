import React from 'react';
import './app-header.scss';
const AppHeader = () => {
    return (
        <div className="app-header">
            <h1 className="app-header-title">My Todo List</h1>
            <span className="app-header-counter">1 more to do, 3 done</span>
        </div>
    );
};

export default AppHeader;