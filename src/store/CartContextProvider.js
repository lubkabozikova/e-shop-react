import { useState, useReducer, useContext } from "react";
import CartContext from "./cart-context";

const addingTable = { ADD: 1, REMOVE: -1 };
const orderReducer = (state, action) => {
  if (!state.hasOwnProperty(action.id)) {
    return { ...state, [action.id]: +action.amount };
  }
  if (state[action.id] === 1 && action.type === "REMOVE") {
    delete state[action.id];
    return state;
  }
  return {
    ...state,
    [action.id]: +state[action.id] + +addingTable[action.type] * +action.amount,
  };
};

function CartContextProvider(props) {
  const initCart = useContext(CartContext);
  const [count, setCount] = useState(initCart.count);
  const [order, dispatchOrder] = useReducer(orderReducer, initCart.order);

  const addToCart = (id, amount) => {
    dispatchOrder({ type: "ADD", id: id, amount: amount });
    setCount((prevCount) => +prevCount + +amount);
  };

  const removeFromCart = (id, amount) => {
    dispatchOrder({ type: "REMOVE", id: id, amount: amount });
    setCount((prevCount) => +prevCount - +amount);
  };

  return (
    <CartContext.Provider
      value={{
        count: count,
        order: order,
        meals: initCart.meals,
        addHandler: addToCart,
        removeHandler: removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
