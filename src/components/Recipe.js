import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = 'e81856a666ddf1bac99b061dd53082c5';
class Recipe extends Component {
  state = {
    activeRecipe: [],
  };

  componentDidMount = async () => {
    const {
      location: {
        state: { recipe: title },
      },
    } = this.props;
    const data = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    const results = await data.json();
    this.setState({ activeRecipe: results.recipes[0] });
  };

  render() {
    const {
      activeRecipe: { image_url: imageUrl, title, publisher, publisher_url: publisherUrl, length },
    } = this.state;
    return (
      <div className="container">
        {length !== 0 && (
          <div className="active-recipe">
            <img className="active-recipe__img" src={imageUrl} alt={title} />
            <h3 className="active-recipe__title">{title}</h3>
            <h4 className="active_recipe__publisher">
              Publisher: <span>{publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website: <a href={publisherUrl}>{publisherUrl}</a>
            </p>
            <button className="active-recipe__button" type="button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
