import React, { CSSProperties } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useInjector } from '../useInjector';
import { SomeService } from '../../services/some.service';


const childStyles: CSSProperties = {
    backgroundColor: 'rgba(200, 20,200, 0.5)',
}

export const ReactChildRouteComponent = () => {

    const injector = useInjector();

    const someService = injector.get(SomeService);

    return (
        <div style={childStyles}>
            <h1>Привет; Я роут из реката</h1>
            <div>
                <button onClick={() => someService.increment()}>+ 1</button>
                <button onClick={() => someService.decrement()}>- 1</button>
            </div>
            <Link to="child">Еще глубже в React</Link>
            <Outlet/>
        </div>
    );
};

export default ReactChildRouteComponent;
