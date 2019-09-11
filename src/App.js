import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <FirstComponent />	
        <SecondComponent />
      </div>
    );
  }
}

//class component
class FirstComponent extends Component{
  render() {
    return (
      <div className="firstComponent">
        	<h1>First Component</h1>
      </div>
    );
  }
}

//class component
class SecondComponent extends Component{
  render() {
    return (
      <div className="secondComponent">
        	<h1>Second Component</h1>
      </div>
    );
  }
}


export default App;
