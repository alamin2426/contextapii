import React from 'react';
import Son from './Son/Son';

const Dad = () => {
    let taka = 1000;
    return (
        <div>
            <h1>Dad</h1>
            <p>taka:{taka}</p>
            <Son></Son>
           
        </div>
    );
};

export default Dad;