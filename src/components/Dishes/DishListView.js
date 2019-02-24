import React from 'react';
import { Link } from 'react-router-dom';

const DishListView = props => {
    return (
        <Link className="dish" to={`/dishes/${props.dish.id}`}>
                <h2>{props.dish.dish_name}</h2> 
        </Link>
    );
}

export default DishListView;