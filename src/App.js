import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import {
	Navbar
} from './components'
// containers
import {
	Home
} from './containers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
