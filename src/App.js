import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

class App extends Component {
  getRecipe = e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    console.log('TCL: App -> recipeName', recipeName);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Recipe</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
