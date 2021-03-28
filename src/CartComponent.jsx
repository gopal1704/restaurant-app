import React, { Component } from "react";
import CartItemList from "./components/CartItemList";
import { CartConsumer } from "./contexts/CartContext";

class CartComponent extends Component {
  render() {
    return (
      <CartConsumer>
        {(cart) => {
          return (
            <div>
              <CartItemList cartitems={cart.items}></CartItemList>

              <div><h1>Total : {cart.total}</h1></div>
            </div>
          );
        }}
      </CartConsumer>
    );
  }
}

export default CartComponent;
