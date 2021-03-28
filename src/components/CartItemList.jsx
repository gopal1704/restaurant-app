import React from "react";
import { List, ListItem, ListItemText ,ListItemSecondaryAction} from "@material-ui/core";

export default function CartItemList(props) {
  return (
    <List>
      {props.cartitems.map((item) => {
        return (
          <ListItem button>
            <ListItemText primary={item.title} />
            <ListItemText primary={item.restaurantName} />
           

            <ListItemSecondaryAction> <ListItemText primary={item.cost} /></ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
