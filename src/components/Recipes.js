import React from 'react';
import PropTypes from 'prop-types';

const Recipes = ({ recipes }) => (
  <div>
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

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

Recipes.defaultProps = {
  recipes: {},
};

export default Recipes;
