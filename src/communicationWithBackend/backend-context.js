import { createContext } from "react";

const BackendContext = createContext({
  getMeals: () => {},
  addMeal: () => {},
  removeMeal: () => {},
  getOrders: () => {},
  addOrder: () => {},
  removeOrder: () => {},
});

export default BackendContext;
