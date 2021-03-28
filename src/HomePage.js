import React, { Component } from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import RestaurantList from "./components/RestaurantList";

class HomePage extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6"> Restaurant </Typography>
            <ShoppingCartOutlinedIcon edge="end"> </ShoppingCartOutlinedIcon>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container>
              <div>
                <RestaurantList> </RestaurantList>
              </div>
            </Container>
          </div>
        </main>
      </>
    );
  }
}

export default HomePage;
