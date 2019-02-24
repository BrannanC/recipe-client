import React, { Component } from 'react';
import Axios from 'axios';

import RecipeCard from '../Recipes/RecipeCard';

class Dish extends Component {
  state = {
    dish: {},
    recipes: [],
    error: ''
  }

  componentDidMount(){
    Axios
      .get(`http://localhost:3300/api/dishes/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          dish: res.data.dish,
          recipes: res.data.recipes
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err
        })
      })
  }

  render() {
    return (
      <div className="Dish">
        <h2 className="dishname">{this.state.dish.dish_name}</h2>
        <div className="recipe-list">{this.state.recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.recipeId} />)}</div>
      </div>
    );
  }
}

export default Dish;