import React, { CSSProperties, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';
import ReactChildRouteComponent from './react-child-route/react-child-route-component';
import ReactChildChildRouteComponent from './react-child-route/react-child-child-route-component';
import { AuthContext } from './auth-context';
import { useInjector } from './useInjector';
import { AuthService } from '../services/auth.service';
import { Async } from './Async';

const ReactAppStyles: CSSProperties = {
    backgroundColor: 'rgba(200, 50, 50, 0.5)',
}

export const App = () => {
    const injector = useInjector();

    const authService = injector.get(AuthService);

    const token$ = authService.token$;
    const [token, setValue] = useState<string>('');

    return (
        <Async observable={token$} onChange={(e) => setValue(e)}>
            <AuthContext.Provider value={token}>
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
            </AuthContext.Provider>
        </Async>
    );
}

export default App;
