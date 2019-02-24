import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = props => {
    return (
        <div className="Navbar">
            <NavLink to="/" className="logo">
            Recipr           
            </NavLink>
            <div className="nav-links">                
                <NavLink to="/adddish"><p>Add Dish</p></NavLink>
                <NavLink to="/recipes"><p>Recipes</p></NavLink>
            </div>               
        </div>
    );
}

export default Navbar;