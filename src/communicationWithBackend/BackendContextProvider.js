import { useCallback, useEffect, useState } from "react";

import BackendContext from "./backend-context";
import URL from "./URL";

function BackendContextProvider(props) {
  const [meals, setMeals] = useState({});
  const [orders, setOrders] = useState({});

  const fetchHandler = async (method, items, item) => {
    try {
      let response = null;
      if (method === "GET") {
        response = await fetch(URL + items + ".json");
      }
      if (method === "POST") {
        response = await fetch(URL + items + ".json", {
          method: "POST",
          body: JSON.stringify(item),
          headers: { "Content-Type": "application/json" },
        });
      }
      if (method === "DELETE") {
        response = await fetch(URL + items + "/" + item + ".json", {
          method: "DELETE",
        });
      }

      if (!response.ok) {
        throw new Error(
          "You probably don't have the right url. Try switching to BackendContextProvider-alt in the file index.js."
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  const getMeals = useCallback(async () => {
    const data = await fetchHandler("GET", "meals", undefined);
    data === undefined ? setMeals({}) : setMeals(data);
  }, []);

  const addMeal = async (meal) => {
    await fetchHandler("POST", "meals", meal);
    getMeals();
  };

  const removeMeal = async (id) => {
    await fetchHandler("DELETE", "meals", id);
    getMeals();
  };

  const getOrders = useCallback(async () => {
    const data = await fetchHandler("GET", "orders", undefined);
    data === undefined ? setOrders({}) : setOrders(data);
  }, []);

  const addOrder = async (order) => {
    await fetchHandler("POST", "orders", order);
    getOrders();
  };

  const removeOrder = async (id) => {
    await fetchHandler("DELETE", "orders", id);
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
