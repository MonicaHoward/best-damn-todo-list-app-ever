import React, { Component } from 'react';

import ToDo from './ToDo.js';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="title">Best Damn To-Do List App Ever</h1>

        <div>

          <ToDo />

        </div>
      </div>
    );
  }
}

export default App;
