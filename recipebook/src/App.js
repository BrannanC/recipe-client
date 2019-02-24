import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dish from './components/Dishes/Dish';
import Recipe from './components/Recipes/Recipe';
import RecipeList from './components/Recipes/RecipeList';
import AddDish from './components/Dishes/AddDish';

import './App.css';
import './components/Home/Home.css';
import './components/Dishes/Dishes.css';
import './components/Recipes/Recipes.css';
import './components/Navbar/Navbar.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route path="/dishes/:id" component={Dish} />
        <Route path="/recipes" component={RecipeList} />
        <Route path="/recipes/:id" component={Recipe} />
        <Route path="/adddish" component={AddDish} />
      </div>
    );
  }
}

export default withRouter(App);
