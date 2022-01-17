import { useState } from "react";

import BackendContext from "./backend-context";
import inputMeals from "./dummy_meals";

function BackendContextProvider(props) {
  const [meals, setMeals] = useState(inputMeals);
  const [orders, setOrders] = useState({});

  const addMeal = (meal) => {
    setMeals({ ...meals, [Math.random()]: meal });
  };

  const removeMeal = (id) => {
    const { [id]: removed, ...newMeals } = meals;
    setMeals(newMeals);
  };

  const addOrder = (order) => {
    setOrders({ ...orders, [Math.random()]: order });
  };

  const removeOrder = (id) => {
    const { [id]: removed, ...newOrders } = orders;
    setOrders(newOrders);
  };

  return (
    <BackendContext.Provider
      value={{
        meals: meals,
        addMeal: addMeal,
        removeMeal: removeMeal,
        orders: orders,
        addOrder: addOrder,
        removeOrder: removeOrder,
      }}
    >
      {props.children}
    </BackendContext.Provider>
  );
}

export default BackendContextProvider;
