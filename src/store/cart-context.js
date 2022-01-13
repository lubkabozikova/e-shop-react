import { createContext } from "react";
import meals from "../components/dummy_meals";

// const initOrder = { name: {}, price: {}, amount: {} };
// meals.forEach((meal) => {
//   initOrder.name[meal.id] = meal.name;
//   initOrder.price[meal.id] = meal.price;
//   initOrder.amount[meal.id] = 0;
// });

const initOrder = {};

const allMeals = { id: [], name: {}, description: {}, price: {} };
meals.forEach((meal) => {
  allMeals.id.push(meal.id);
  allMeals.name[meal.id] = meal.name;
  allMeals.description[meal.id] = meal.description;
  allMeals.price[meal.id] = meal.price;
});

const CartContext = createContext({
  count: 0,
  order: initOrder,
  meals: allMeals,
  addHandler: () => {},
  removeHandler: () => {},
  mealsAddHandler: () => {},
  clearCartHandler: () => {},
});

export default CartContext;
