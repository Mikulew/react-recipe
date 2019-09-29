import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';

const API_KEY = 'e81856a666ddf1bac99b061dd53082c5';

class App extends Component {
  state = {
    recipes: [],
  };

  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const data = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    const results = await data.json();
    this.setState({ recipes: results.recipes });
  };

  render() {
    const { recipes } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Recipe</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {recipes.map(recipe => {
          return (
            <div key={recipe.recipe_id}>
              <img src={recipe.image_url} alt={recipe.title} />
              <p>{recipe.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
