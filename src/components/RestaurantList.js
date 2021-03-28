import React from "react";
import { Restaurants } from "../data/Restaurants";
import { List, ListItem, ListItemText } from "@material-ui/core";
function RestaurantList(props) {
  return (
    <List component="nav" aria-label="main mailbox folders">
      {Restaurants.map((restaurant) => {
      return ( 
          <ListItem button key={restaurant.id}>
            <ListItemText primary={restaurant.name} />
          </ListItem>
        )
      })}

    </List>
  );
}

export default RestaurantList;
