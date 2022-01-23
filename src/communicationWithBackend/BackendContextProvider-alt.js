import { useState } from "react";

import BackendContext from "./backend-context";
import inputMeals from "./dummy_meals";

function BackendContextProvider(props) {
  const [meals, setMeals] = useState(inputMeals);
  const [orders, setOrders] = useState([]);

  const addMeal = (meal) => {
    setMeals([...meals, { ...meal, id: [Math.random()] }]);
  };

  const removeMeal = (id) => {
    const newMeals = meals.filter((meal) => meal.id !== id);
    setMeals(newMeals);
  };

  const addOrder = (order) => {
    setOrders([...orders, { ...order, id: [Math.random()] }]);
  };

  const removeOrder = (id) => {
    const newOrders = orders.filter((order) => order.id !== id);
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
