import React, { createContext } from "react";
import HomePage from "./HomePage";

import { CartProvider } from "./contexts/CartContext";
import {Cart} from './data/Cart';


function App() {
  return (
    <CartProvider value={Cart}>
      <HomePage></HomePage>
    </CartProvider>
  );
}

export default App;
