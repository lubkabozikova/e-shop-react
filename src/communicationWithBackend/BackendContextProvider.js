import { useCallback, useEffect, useState } from "react";

import BackendContext from "./backend-context";
import FetchHandler from "./FetchHandler";

function BackendContextProvider(props) {
  const [meals, setMeals] = useState([]);
  const [orders, setOrders] = useState([]);

  const getMeals = useCallback(async () => {
    const data = await FetchHandler("GET", "meals", undefined);
    if (!data) {
      setMeals([]);
    } else {
      const transformedData = Object.keys(data).map((id) => {
        return { ...data[id], id: id };
      });
      setMeals(transformedData);
    }
  }, []);

  const addMeal = async (meal) => {
    await FetchHandler("POST", "meals", meal);
    getMeals();
  };

  const removeMeal = async (id) => {
    await FetchHandler("DELETE", "meals", id);
    getMeals();
  };

  const getOrders = useCallback(async () => {
    const data = await FetchHandler("GET", "orders", undefined);
    if (!data) {
      setOrders([]);
    } else {
      const transformedData = Object.keys(data).map((id) => {
        return { ...data[id], id: id };
      });
      setOrders(transformedData);
    }
  }, []);

  const addOrder = async (order) => {
    await FetchHandler("POST", "orders", order);
    getOrders();
  };

  const removeOrder = async (id) => {
    await FetchHandler("DELETE", "orders", id);
    getOrders();
  };

  useEffect(() => getMeals(), [getMeals]);
  useEffect(() => getOrders(), [getOrders]);

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
