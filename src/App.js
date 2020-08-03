import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Hello />

         <Greet name="Bruce" heroName = "Batman">
            <p>This is children props</p>
         </Greet>
         <Greet name="Clack" heroName = "SuperMan" > 
            <button>Action</button>
         </Greet>
         <Greet name="Diana" heroName = "Wonder Woman" />


         <Welcome name="Gabriel" heroName = "Zoro">
           <img src="https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/Z-bientot-une-nouvelle-serie-sur-Zorro.jpg"
           width='300'
           />
         </Welcome>
      </div>
    );
 }
}

export default App;
