import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListCard = props => {
    return (
        <div className="recipe">
            <Link to={`/recipe/${props.recipe.id}`}><h2>{props.recipe.recipe_name}</h2></Link> 
        </div>
    );
}

export default RecipeListCard;