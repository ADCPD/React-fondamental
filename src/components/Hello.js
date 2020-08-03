import React from 'react';

const Hello = () => {
    /* JSX
    return (
        <div>
            <h1>Hello Amir DHAOUADI</h1>
        </div>
    );
    */

    // JSX
    return React.createElement(
        'div',
        {
            id: 'hello-div',
            className: 'dummyClass'
        }, 
        React.createElement(
            'h1', 
            null,  
            'Hello Amir DHAOUADI'
        )
    )
}

export default Hello;
