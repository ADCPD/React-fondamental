import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Welcome name='Clarck' heroName='SuperMan'/>
         <Counter />
      </div>
    );
 }
}

export default App;
