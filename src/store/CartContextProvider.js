import { useState, useReducer } from "react";
import CartContext from "./cart-context";

const addingTable = { ADD: 1, REMOVE: -1 };
const orderReducer = (state, action) => {
  // adding something that is not there yet
  if (action.type === "ADD" && !state.hasOwnProperty(action.id)) {
    localStorage.setItem(action.id, action.amount);
    return { ...state, [action.id]: +action.amount };
  }
  // removing the last of one kind
  if (action.type === "REMOVE" && state[action.id] === 1) {
    delete state[action.id];
    localStorage.removeItem(action.id);
    return state;
  }
  // clearing the entire order
  if (action.type === "CLEAR") {
    localStorage.clear();
    return {};
  }
  // adding to existing or removing so that there is still some left
  else {
    const amount =
      +state[action.id] + +addingTable[action.type] * +action.amount;
    localStorage.setItem(action.id, amount);
    return {
      ...state,
      [action.id]: amount,
    };
  }
};

function CartContextProvider(props) {
  // const initCart = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [order, dispatchOrder] = useReducer(orderReducer, {});

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
