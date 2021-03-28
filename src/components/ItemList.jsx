import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";

import AddIcon from "@material-ui/icons/Add";
import { CartConsumer } from "../contexts/CartContext";
export default function ItemList(props) {
  return (
    <List>
      {props.items.map((item) => {
        return (
          <ListItem button key={item.id}>
            <ListItemText primary={item.title} />

            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  props.add(props.cart, item);
                }}
              >
                <AddIcon />
              </IconButton>
              <IconButton>
                <ListItemText
                  primary={props.getQty(props.rest_id, item.id, props.cart)}
                />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  props.remove(props.cart, item);
                }}
              >
                <RemoveIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
