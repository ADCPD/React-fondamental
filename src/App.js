import React, { Component } from 'react';
import './App.css';
//import ListRendering from './components/ConditionalRendering/ListRendering';
//import UserListing from './components/ConditionalRendering/UserListing';
import FormType from './components/FormType/FormType';

class App extends Component {
  render() {
    return (
      <div className="App">
          { /*<ListRendering/>*/ }
          { /*<UserListing/>*/ }
          <FormType />
      </div>
    );
 }
}

export default App;
