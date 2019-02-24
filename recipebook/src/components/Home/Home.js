import React, { Component } from 'react';
import DishListView from '../Dishes/DishListView';

import Axios from 'axios';

class Home extends Component {
  state = {
    dishes: [],
    error: ''
  }

  componentDidMount(){
    Axios
      .get('http://localhost:3300/api/dishes')
      .then(res => {
        this.setState({
          dishes: res.data.dishes
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
      <div className="Home">
      <h1>Recipe Books Dishes</h1>
        <div className="dish-list">{this.state.dishes.map(x => <DishListView dish={x} key={x.id} />)}</div>
      </div>
    );
  }
}

export default Home;