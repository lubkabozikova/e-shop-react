import BackendContext from "./backend-context";
import inputMeals from "./dummy_meals";

function BackendContextProvider(props) {
  const meals = inputMeals;
  const orders = {};

  const getMeals = () => {
    return meals;
  };

  const addMeal = (meal) => {
    meals[Math.random()] = meal;
  };

  const removeMeal = (id) => {
    delete meals[id];
  };

  const getOrders = () => {
    return orders;
  };

  const addOrder = (order) => {
    orders[Math.random()] = order;
  };

  const removeOrder = (id) => {
    delete orders[id];
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
