import React, { Component } from 'react';
import RecipeListCard from './RecipeListCard';

import Axios from 'axios';

class RecipeList extends Component {
  state = {
    recipes: [],
    error: ''
  }

  componentDidMount(){
    Axios
      .get('https://brannan-recipe.herokuapp.com/api/recipes')
      .then(res => {
        this.setState({
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
      <div className="Recipe">
        <h1>Recipes</h1>
      <div className="recipe-list">
        {this.state.recipes.map(x => <RecipeListCard recipe={x} key={x.id} />)}
      </div>
      </div>
    );
  }
}

export default RecipeList;