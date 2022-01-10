import { createContext, useState, useReducer } from "react";
import meals from "../components/dummy_meals";

const CartContext = createContext({
  open: false,
  count: 0,
  openHandler: () => {},
  closeHandler: () => {},
  addHandler: () => {},
  removeHandler: () => {},
});

////////////////////////////////////////////////////////////////////////////

const initOrder = { name: {}, price: {}, amount: {} };
meals.forEach((meal) => {
  initOrder.name[meal.id] = meal.name;
  initOrder.price[meal.id] = meal.price;
  initOrder.amount[meal.id] = 0;
});
const orderReducer = (state, action) => {
  if (action.type === "ADD")
    return {
      ...state,
      amount: {
        ...state.amount,
        [action.id]: +state.amount[action.id] + +action.amount,
      },
    };
  if (action.type === "REMOVE")
    return {
      ...state,
      amount: {
        ...state.amount,
        [action.id]: +state.amount[action.id] - +action.amount,
      },
    };
};

function CartContextProvider(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [order, dispatchOrder] = useReducer(orderReducer, initOrder);

  const openCart = () => {
    setCartOpen(true);
  };
  const closeCart = () => {
    setCartOpen(false);
  };

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
        open: cartOpen,
        count: count,
        order: order,
        openHandler: openCart,
        closeHandler: closeCart,
        addHandler: addToCart,
        removeHandler: removeFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider };
export default CartContext;
