import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

const RouterWrapper = () => {
    return (
        <Router>
           <App/>
        </Router>
    );
};

export default RouterWrapper
