import React, { CSSProperties } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';
import ReactChildRouteComponent from './react-child-route/react-child-route-component';
import ReactChildChildRouteComponent from './react-child-route/react-child-child-route-component';

const ReactAppStyles: CSSProperties = {
    backgroundColor: 'rgba(200, 50, 50, 0.5)',
}

export const App = () => {
    return (

        <div style={ReactAppStyles}>
            <NxWelcome title="react-platform"/>
            <br/>
            <Link to="/child">Дочерний роут реакт</Link>
            <br/>
            <Routes>
                <Route path="child" element={<ReactChildRouteComponent/>}>
                    <Route path="child" element={<ReactChildChildRouteComponent/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
