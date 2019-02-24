import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = props => {
    return (
        <div className="recipe">
            <Link to={`/recipes/${props.recipe.recipeId}`}><h2>{props.recipe.recipe_name}</h2></Link> 
        </div>
    );
}

export default RecipeCard;