import React from 'react'; 

/* JS
function Greet() {
    return (
      <div className="App"> 
          <h1>
          Hello World !
          </h1>
      </div>
    );
  }
  */

  // JSX

   const Greet  = () => <h1> Hello World ! </h1>
  
  // We can call component by his only declared name like Greet
  // use import like this : import {Greet}
  //export const Greet  = () => <h1> Hello World ! </h1>
  
  // when use this syntaxe we can call this any name we like to be
export default Greet;
