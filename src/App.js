import React, { Component } from 'react';
import './App.css';
import CountryList from './components/Country/countryList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CountryList />
      </div>
    );
 }
}

export default App;
