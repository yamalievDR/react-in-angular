import React, { CSSProperties } from 'react';

const childChildStyles: CSSProperties = {
    backgroundColor: 'rgba(50, 120, 60, 0.5)',
}

export const ReactChildChildRouteComponent = () => {

    return (
        <div style={childChildStyles}>
            <h1>Дочерний роут для дочернего роута /child/child</h1>
        </div>
    );
};

export default ReactChildChildRouteComponent;
