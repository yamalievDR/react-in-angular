import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

export default function RouterWrapper() {
    return (
        <Router>
            <App/>
        </Router>
    );
}
