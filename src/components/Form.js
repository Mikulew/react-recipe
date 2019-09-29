import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ getRecipe }) => (
  <form onSubmit={getRecipe}>
    <input type="text" name="recipeName" />
    <button type="submit">Search</button>
  </form>
);

Form.propTypes = {
  getRecipe: PropTypes.func.isRequired,
};

export default Form;
