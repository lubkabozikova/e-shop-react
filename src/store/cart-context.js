import { createContext } from "react";

const CartContext = createContext({
  count: 0,
  order: {},
  addHandler: () => {},
  removeHandler: () => {},
  mealsAddHandler: () => {},
  clearCartHandler: () => {},
});

export default CartContext;
