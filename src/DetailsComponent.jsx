import React, { Component } from "react";
import { Restaurants } from "./data/Restaurants";

import { items } from "./data/Items";
import ItemList from "./components/ItemList";

class DetailsComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      items: null,
      restaurantId: this.props.restaurantId,
    };
  }

  componentDidMount() {
    for (let i = 0; i < Restaurants.length; i++) {
      if (Restaurants[i].id == this.state.restaurantId) {
           Restaurants.items.
        
        this.setState({ items: Restaurants[i].items });
      }
    }
  }

  render() {
    if (this.state.items) {
     return <ItemList items={this.state.items}></ItemList>;
    }
    else{
      return <h1>No details</h1>
    }
  }
}

export default DetailsComponent;
