import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recipes = ({ recipes }) => (
  <div className="container">
    <div className="row">
      {recipes.map(recipe => {
        return (
          <div className="col-md-4" key={recipe.recipe_id}>
            <div className="recipe__box">
              <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title} />
              <div className="recipe__text">
                <h5 className="recipe__title">
                  {recipe.title.length < 30
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 25)}...`}
                </h5>
                <p className="recipe__subtitle">
                  Publisher:
                  <span className="recipe__publisher">{recipe.publisher}</span>
                </p>
              </div>
              <button className="recipe__button" type="button">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.title },
                  }}
                >
                  View Recipe
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

Recipes.defaultProps = {
  recipes: [],
};

export default Recipes;
