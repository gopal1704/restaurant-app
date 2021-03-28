import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";



export default function ItemList(props) {
    console.log(props);
  return (
    <List>
      {props.items.map((item) => {
        return (
          <ListItem button key={item.id}>
            <ListItemText primary={item.name} />{" "}
          </ListItem>
        );
      })}
    </List>
  );
}
