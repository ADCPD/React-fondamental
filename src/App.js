import React, { Component } from 'react';
import './App.css';
//import ListRendering from './components/ConditionalRendering/ListRendering';
//import UserListing from './components/ConditionalRendering/UserListing';
//import FormType from './components/FormType/FormType';
import LifeCycleA from './components/LifeCycle/LifeCycleA';
class App extends Component {
  render() {
    return (
      <div className="App">
          { /*<ListRendering/>*/ }
          { /*<UserListing/>*/ }
          { /* <FormType /> */ }
          <LifeCycleA />
      </div>
    );
 }
}

export default App;
