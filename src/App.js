import React, { Component } from 'react';
import './App.css';
import UserGreeting from './components/ConditionalRendering/UserGreeting';

class App extends Component {
  render() {
    return (
      <div className="App">
          <UserGreeting/>
      </div>
    );
 }
}

export default App;
