import React from "react";
import { DataGrid } from '@material-ui/data-grid';

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

const columns = [
  { field: "restaurantName", headerName: "restaurantName", width: 250 },
  { field: "title", headerName: "Title", width: 500 },
  { field: "qty", headerName: "Qty", width: 130 },
  { field: "cost", headerName: "Cost", width: 130 },
  {
    field: "s_total",
    headerName: "Amount",
    width: 200,
  },
];
export default function CartItemList(props) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <h1>Cart </h1>
      <DataGrid
        rows={props.cartitems}
        columns={columns}
        pageSize={100}
        checkboxSelection
      />
    </div>

    // <List>
    //   {props.cartitems.map((item) => {
    //     return (
    //       <ListItem button>
    //         <ListItemText primary={item.title} />
    //         <ListItemText primary={item.restaurantName} />
    //         <ListItemText primary={item.qty} />
    //         <ListItemText primary={item.cost} />
    //         <ListItemSecondaryAction>   <ListItemText primary={item.s_total} /></ListItemSecondaryAction>
    //       </ListItem>
    //     );
    //   })}
    // </List>
  );
}
