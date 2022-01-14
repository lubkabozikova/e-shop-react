import BackendContext from "./backend-context";
import URL from "./URL";

function BackendContextProvider(props) {
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
        response = await fetch(URL + items + "/" + item, { method: "DELETE" });
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

  const getMeals = async () => {
    const data = await fetchHandler("GET", "meals", undefined);
    return data;
  };

  const addMeal = async (meal) => {
    const data = await fetchHandler("POST", "meals", meal);
    return data;
  };

  const removeMeal = (id) => {
    fetchHandler("DELETE", "meals", id);
  };

  const getOrders = async () => {
    const data = await fetchHandler("GET", "orders", undefined);
    return data;
  };

  const addOrder = (order) => {
    fetchHandler("POST", "orders", order);
  };

  const removeOrder = (id) => {
    fetchHandler("DELETE", "orders", id);
  };

  return (
    <BackendContext.Provider
      value={{
        getMeals: getMeals,
        addMeal: addMeal,
        removeMeal: removeMeal,
        getOrders: getOrders,
        addOrder: addOrder,
        removeOrder: removeOrder,
      }}
    >
      {props.children}
    </BackendContext.Provider>
  );
}

export default BackendContextProvider;
