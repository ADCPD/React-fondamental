import React, { Component } from 'react';
import './App.css';
import PostList from './components/Post/PostList';
import PostForm from './components/Post/PostForm';
class App extends Component {
  render() {
    return (
      <div className="App">
          <PostForm />
          <PostList />
      </div>
    );
 }
}

export default App;
