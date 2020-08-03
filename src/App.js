import React, { Component } from 'react';
import './App.css';
//import Hello from './components/Hello;
//import Greet from './components/Greet';
//import Message from './components/Message';
//import Counter from './components/Counter';
//import Welcome from './components/Welcome';
import FunctionClick from './components/EventHandling/FunctionClick';
import ClassClick from './components/EventHandling/ClassClick';
class App extends Component {
  render() {
    return (
      <div className="App">
         <FunctionClick /> 
         <ClassClick /> 
      </div>
    );
 }
}

export default App;
