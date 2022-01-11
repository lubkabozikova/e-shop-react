import { useState, useReducer, useContext } from "react";
import CartContext from "./cart-context";

const orderReducer = (state, action) => {
  if (action.type === "MEALS_ADD")
    return {
      ...state,
      amount: {
        ...state.amount,
        [action.id]: +state.amount[action.id] + +action.amount,
      },
    };
  if (action.type === "ADD")
    return {
      ...state,
      amount: {
        ...state.amount,
        [action.id]: +state.amount[action.id] + 1,
      },
    };
  if (action.type === "REMOVE")
    return {
      ...state,
      amount: {
        ...state.amount,
        [action.id]: +state.amount[action.id] - 1,
      },
    };
};

function CartContextProvider(props) {
  const initCart = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [order, dispatchOrder] = useReducer(orderReducer, initCart.order);

  const addToCart = (id, amount) => {
    dispatchOrder({ type: "ADD", id: id });
    setCount((prevCount) => +prevCount + 1);
  };

  const removeFromCart = (id, amount) => {
    dispatchOrder({ type: "REMOVE", id: id });
    setCount((prevCount) => +prevCount - 1);
  };

  const mealsAddToCart = (id, amount) => {
    dispatchOrder({ type: "MEALS_ADD", id: id, amount: amount });
    setCount((prevCount) => +prevCount + +amount);
  };

  return (
    <CartContext.Provider
      value={{
        count: count,
        order: order,
        meals: initCart.meals,
        addHandler: addToCart,
        removeHandler: removeFromCart,
        mealsAddHandler: mealsAddToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
