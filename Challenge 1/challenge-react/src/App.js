import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Gallery />
        {/* <Contact /> */}
      </div>
    );
  }
}

export default App;