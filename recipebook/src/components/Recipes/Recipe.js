import React, { Component } from 'react';
import Axios from 'axios';

class Recipe extends Component {
  state = {
    recipe: {},
    error: ''
  }

  componentDidMount(){
    Axios
      .get(`http://localhost:3300/api/recipes/${this.props.match.params.id}`)
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
      <div className="Dish">
      <h1>Recipe</h1>
        <h2>{this.state.recipe.recipe_name}</h2>
        <div className="IngredientsCard">
            <ul>
                {this.state.recipe.ingredients && this.state.recipe.ingredients.map(x => {
                    return (<li>{x.quantity} {x.ingredient_name}</li>);
                })}
            </ul>
        </div>
      </div>
    );
  }
}

export default Recipe;