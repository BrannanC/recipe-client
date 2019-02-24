import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import Axios from 'axios';

import TopFiveDishes from './TopFiveDishes';

class AddDish extends Component {
  state = {
    dish_name: '',
    error: '',
    message: ''
  }

  handleChange = e => {
      const value = e.target.value
      this.setState({
          dish_name: value
      })
  }

  handleSubmit = e => {
      e.preventDefault();
      Axios
        .post('http://localhost:3300/api/dishes', {dish_name: this.state.dish_name})
        .then(res => {
            this.setState(prevState => ({
                dish_name: '',
                error: '',
                message: `${prevState.dish_name} added successfully`
            }))
        })
        .catch(err => {
            console.log(err);
            this.setState({
                dish_name: '',
                error: err,
                message: ''
            })
        })
  }
 
  render() {
    return (
      <div className="AddDish">
        <h1>Add Dish</h1>
        {this.state.message && <p>{this.state.message}</p>}
        {this.state.error && <p>{this.state.error.message}</p>}
        <Form onSubmit={this.handleSubmit}>
            <Input required type="text" placeholder="Name of dish..." 
                value={this.state.dish_name} onChange={this.handleChange} />
        </Form>
        <TopFiveDishes />
      </div>
    );
  }
}

export default AddDish;