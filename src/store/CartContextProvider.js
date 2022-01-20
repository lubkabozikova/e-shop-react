import { useState, useReducer, useEffect } from "react";
import CartContext from "./cart-context";

const addingTable = { ADD: 1, REMOVE: -1 };
const orderReducer = (state, action) => {
  //loading previous order from localStorage
  if (action.type === "START") {
    let newState = JSON.parse(localStorage.getItem("order")) || {};

    return newState;
  }
  // adding something that is not there yet
  if (action.type === "ADD" && !state.hasOwnProperty(action.id)) {
    const newState = { ...state, [action.id]: +action.amount };
    localStorage.setItem("order", JSON.stringify(newState));
    return newState;
  }
  // removing the last of one kind
  if (action.type === "REMOVE" && state[action.id] === 1) {
    const { [action.id]: removed, ...newState } = state;
    Object.keys(newState).length > 0
      ? localStorage.setItem("order", JSON.stringify(newState))
      : localStorage.removeItem("order");
    return newState;
  }
  // clearing the entire order
  if (action.type === "CLEAR") {
    localStorage.clear();
    return {};
  }
  // adding to existing or removing so that there is still some left
  else {
    const newAmount =
      +state[action.id] + +addingTable[action.type] * +action.amount;
    const newState = { ...state, [action.id]: newAmount };
    localStorage.setItem("order", JSON.stringify(newState));
    return newState;
  }
};

function CartContextProvider(props) {
  const [count, setCount] = useState(0);
  const [order, dispatchOrder] = useReducer(orderReducer, {});

  useEffect(() => {
    dispatchOrder({ type: "START" });
  }, []);

  useEffect(() => {
    console.log("effect");
    let newCount = 0;
    Object.values(order).forEach((amount) => {
      newCount = +newCount + +amount;
    });
    console.log(newCount);
    setCount(newCount);
  }, [order]);

  const addToCart = (id, amount) => {
    dispatchOrder({ type: "ADD", id: id, amount: amount });
    setCount((prevCount) => +prevCount + +amount);
  };

  const removeFromCart = (id, amount) => {
    dispatchOrder({ type: "REMOVE", id: id, amount: amount });
    setCount((prevCount) => +prevCount - +amount);
  };

  const clearCart = () => {
    setCount(0);
    dispatchOrder({ type: "CLEAR" });
  };

  return (
    <CartContext.Provider
      value={{
        count: count,
        order: order,
        addHandler: addToCart,
        removeHandler: removeFromCart,
        clearCartHandler: clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
