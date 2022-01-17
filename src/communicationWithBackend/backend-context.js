import { createContext } from "react";

const BackendContext = createContext({
  meals: {},
  addMeal: () => {},
  removeMeal: () => {},
  orders: {},
  addOrder: () => {},
  removeOrder: () => {},
});

export default BackendContext;
