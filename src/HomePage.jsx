import React, { Component } from "react";
import { Router } from "@reach/router";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import RestaurantList from "./components/RestaurantList";
import CartComponent from './CartComponent'
import  DetailsComponent  from "./DetailsComponent";
import { Link } from "@reach/router";
class HomePage extends Component {
  render() {
    return (

      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6"> Restaurant </Typography>
            <Link to="/cart"> <ShoppingCartOutlinedIcon edge="end"> </ShoppingCartOutlinedIcon> </Link>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container>
              <div>
                <Router>
                  <RestaurantList path="/"> </RestaurantList>
                  
                  <DetailsComponent path="/details/:restaurantId"></DetailsComponent>

                  <CartComponent path="/cart"></CartComponent>
                </Router>
              </div>
            </Container>
          </div>
        </main>
      </>
    );
  }
}

export default HomePage;
