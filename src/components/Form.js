import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ getRecipe }) => (
  <form className="form" onSubmit={getRecipe}>
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button" type="submit">
      Search
    </button>
  </form>
);

Form.propTypes = {
  getRecipe: PropTypes.func.isRequired,
};

export default Form;
