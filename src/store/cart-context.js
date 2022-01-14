import { createContext } from "react";

import meals from "../communicationWithBackend/dummy_meals";

const CartContext = createContext({
  count: 0,
  order: {},
  meals: {},
  addHandler: () => {},
  removeHandler: () => {},
  mealsAddHandler: () => {},
  clearCartHandler: () => {},
});

export default CartContext;
