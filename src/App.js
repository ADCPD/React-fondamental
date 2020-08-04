import React, { Component } from 'react';
import './App.css';
import ListRendering from './components/ConditionalRendering/ListRendering';
import UserListing from './components/ConditionalRendering/UserListing';


class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<ListRendering/>*/ }
          <UserListing/>
      </div>
    );
 }
}

export default App;
