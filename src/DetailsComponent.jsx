import React, { Component } from "react";
import { Restaurants } from "./data/Restaurants";

import { items } from "./data/Items";
import ItemList from "./components/ItemList";
import { CartConsumer } from "./contexts/CartContext";

class DetailsComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      items: null,
      restaurantId: this.props.restaurantId,
      restaurentName: null,
    };
  }

  componentDidMount() {
    console.log(this.state.items);
    let listItems = null;

    for (let i = 0; i < Restaurants.length; i++) {
      if (Restaurants[i].id == this.state.restaurantId) {
        listItems = this.compareIdAndGetItems(Restaurants[i].items, items);
        console.log(listItems);
        this.setState({ items: listItems }, () => {
          let resName = this.getRestaurantName();
          console.log(resName);
          if (resName) {
            this.setState({
              restaurentName: resName,
            });
          }
        });
        break;
      }
    }
  }

  getRestaurantName = () => {
    let name = null;
    Restaurants.forEach((restaurant) => {
      console.log(this.state.restaurantId);

      if (restaurant.id == this.state.restaurantId) {
        console.log(restaurant.name);
        name = restaurant.name;
      }
    });
    return name;
  };

  getQty = (rest_id, id, cart) => {
    let qty = 0;

    cart.items.forEach((item) => {
      if (item.restaurantId == rest_id && item.id == id) {
        qty = item.qty;
      }
    });
    console.log("qty" + qty);
    return qty;
  };
  handleAdd = (cart, cart_item) => {
    let push = true;
    let cartItem = {
      restaurantId: this.state.restaurantId,
      restaurantName: this.state.restaurentName,
      qty: 1,
      s_total: cart_item.cost,
      ...cart_item,
    };

    cart.items.forEach((ci) => {
      if (ci.restaurantId == this.state.restaurantId && ci.id == cartItem.id) {
        ci.qty = ci.qty + 1;
        ci.s_total = ci.cost * ci.qty;
        push = false;
      }
    });
    if (push) {
      
     
      cart.items.push(cartItem);
    }

    cart.total = cart.total + cart_item.cost;

    this.setState({
      restaurantId: this.props.restaurantId
    });
  };

  handleRemove = (cart, item) => {
    cart.items.forEach((ci, index) => {
      if (ci.restaurantId == this.state.restaurantId && ci.id == item.id) {
        ci.qty = ci.qty - 1;
        ci.s_total = ci.cost * ci.qty;

        cart.total = cart.total - item.cost;
        
        if (ci.qty == 0) {
          cart.items.splice(index, 1);
         
        }
      }
    });
   

    this.setState({
      restaurantId: this.props.restaurantId,
    });
  };

  compareIdAndGetItems(restaurantItemIds, commonItems) {
    console.log(this.state.items);
    let itemsList = [];

    restaurantItemIds.forEach((restaurantItemId) => {
      commonItems.forEach((commonItem, index) => {
        if (commonItem.id === restaurantItemId) {
          itemsList.push(commonItem);
        }
      });
    });

    return itemsList.length > 0 ? itemsList : null;
  }

  render() {
    if (this.state.items) {
      return (
        <CartConsumer>
          {(Cart) => {
            return (
              <div>
                <h1>{this.state.restaurentName}</h1>
              
                      <ItemList
                        items={this.state.items}
                        add={this.handleAdd}
                        remove={this.handleRemove}
                        cart={Cart}
                        rest_id={this.state.restaurantId}
                        getQty={this.getQty}
                      ></ItemList>
                   
              </div>
            );
          }}
        </CartConsumer>
      );
    } else {
      return <h1>No details</h1>;
    }
  }
}

export default DetailsComponent;
