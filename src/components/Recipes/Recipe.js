import React, { Component } from 'react';
import Axios from 'axios';

class Recipe extends Component {
  state = {
    recipe: {},
    error: ''
  }

  componentDidMount(){
    Axios
      .get(`https://brannan-recipe.herokuapp.com/api/recipes/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          recipe: res.data
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
      <h1>Recipe: {this.state.recipe.recipe_name}</h1>

      <div className="content">
        <p className="recipe-instructions">Instructions: {this.state.recipe.instructions}</p>
        <div className="IngredientsCard">
        <h2>Ingredients</h2>
            <ul>
                {this.state.recipe.ingredients && this.state.recipe.ingredients.map(x => {
                    return (<li>{x.quantity} {x.ingredient_name}</li>);
                })}
            </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default Recipe;