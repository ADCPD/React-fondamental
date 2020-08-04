import React, { Component } from 'react';

function ListRendering()  {
    const names = ['thomas', 'zoe', "justine"];
    
    /* 1 :
    return (
        <ul>
            <li>{names[0]}</li>
            <li>{names[1]}</li>
            <li>{names[2]}</li>
        </ul>
    );  
    */

    /* 2 :
   return (
        <ul>
            {names.map(name => <li> {name} </li>)}
        </ul>
    ); 
    */

    /* 3 : */
   const nameList = names.map(name => <li> {name} </li>)
   return (
    <ul>
        {nameList}
    </ul>
);

}

export default ListRendering;