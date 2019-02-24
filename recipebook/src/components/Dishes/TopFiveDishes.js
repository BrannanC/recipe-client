import React, { Component } from 'react';
import Axios from 'axios';

class TopFiveDishes extends Component {
  state = {
    dishes: [],
    error: '',
  }

  componentDidMount() {
      Axios
        .get('http://localhost:3300/api/topfivedishes')
        .then(res => {
            this.setState({
                dishes: res.data.dishes,
                error: ''
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
        <div className="TopFive">
        <h2>Newest Dishes</h2>
            <div className="dish-list">
        {this.state.dishes.map(x => {
            return (<div className="dish" key={x.id}>{x.dish_name}</div>);
        })}
            </div>
        </div>
    );
  }
}

export default TopFiveDishes;