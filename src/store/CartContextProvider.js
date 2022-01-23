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
    const newState = {
      ...state,
      [action.id]: {
        name: action.name,
        price: action.price,
        amount: +action.amount,
      },
    };
    localStorage.setItem("order", JSON.stringify(newState));
    return newState;
  }
  // removing the last of one kind
  if (action.type === "REMOVE" && state[action.id].amount === 1) {
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
      +state[action.id].amount + +addingTable[action.type] * +action.amount;
    const newState = {
      ...state,
      [action.id]: { ...state[action.id], amount: newAmount },
    };
    localStorage.setItem("order", JSON.stringify(newState));
    return newState;
  }
};

function CartContextProvider(props) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [order, dispatchOrder] = useReducer(orderReducer, {});

  useEffect(() => dispatchOrder({ type: "START" }), []);

  useEffect(() => {
    let newCount = 0;
    let newTotal = 0;
    Object.keys(order).forEach((mealId) => {
      newCount = +newCount + +order[mealId].amount;
      newTotal = +newTotal + +order[mealId].price * +order[mealId].amount;
    });
    setCount(newCount);
    setTotal(newTotal);
  }, [order]);

  const addToCart = (id, amount, name, price) => {
    dispatchOrder({
      type: "ADD",
      id: id,
      amount: amount,
      name: name,
      price: price,
    });
    setCount((prevCount) => +prevCount + +amount);
    setTotal((prevTotal) => +prevTotal + +amount * +price);
  };

  const removeFromCart = (id, amount, name, price) => {
    dispatchOrder({
      type: "REMOVE",
      id: id,
      amount: amount,
      name: name,
      price: price,
    });
    setCount((prevCount) => +prevCount - +amount);
    setTotal((prevTotal) => +prevTotal - +amount * +price);
  };

  const clearCart = () => {
    setCount(0);
    setTotal(0);
    dispatchOrder({ type: "CLEAR" });
  };

  return (
    <CartContext.Provider
      value={{
        count: count,
        order: order,
        total: total,
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
