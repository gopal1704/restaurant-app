import React from "react";
import { List, ListItem, ListItemText ,ListItemSecondaryAction,IconButton} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';

import AddIcon from '@material-ui/icons/Add';
export default function ItemList(props) {
   
  return (
    <List>
      {props.items.map((item) => {
        return (
          <ListItem button key={item.id}>
            <ListItemText primary={item.title} />
                               {props.cart.total}
            <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={()=>{props.add(props.cart,item)}}>
                      <AddIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={()=>{props.remove(props.cart,item)}}>
                      <RemoveIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
