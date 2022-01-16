import { useState } from "react";

import BackendContext from "./backend-context";
import inputMeals from "./dummy_meals";

function BackendContextProvider(props) {
  const [meals, setMeals] = useState(inputMeals);
  const [orders, setOrders] = useState({});

  const getMeals = () => {
    return meals;
  };

  const addMeal = (meal) => {
    setMeals({ ...meals, [Math.random()]: meal });
  };

  const removeMeal = (id) => {
    const { [id]: removed, ...newMeals } = meals;
    setMeals(newMeals);
  };

  const getOrders = () => {
    return orders;
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
        addMeal: addMeal,
        getMeals: getMeals,
        removeMeal: removeMeal,
        addOrder: addOrder,
        getOrders: getOrders,
        removeOrder: removeOrder,
      }}
    >
      {props.children}
    </BackendContext.Provider>
  );
}

export default BackendContextProvider;
