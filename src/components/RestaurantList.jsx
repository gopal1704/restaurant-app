import React from "react";
import { Restaurants } from "../data/Restaurants";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "@reach/router";
function RestaurantList(props) {
  return (
    <List>
      {Restaurants.map((restaurant) => {
        return (
          <Link to={"/details/" + restaurant.id} key={restaurant.id}>
            <ListItem button >
              <ListItemText primary={restaurant.name} />{" "}
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
}

export default RestaurantList;
