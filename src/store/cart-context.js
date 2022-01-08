import { createContext, useState } from "react";

const CartContext = createContext({
  open: false,
  count: 0,
  openHandler: () => {},
  closeHandler: () => {},
});

function CartContextProvider(props) {
  let [cartOpen, setCartOpen] = useState(false);

  let openCart = () => {
    setCartOpen(true);
    console.log("cart open");
  };
  let closeCart = () => {
    setCartOpen(false);
    console.log("cart closed");
  };

  return (
    <CartContext.Provider
      value={{
        open: cartOpen,
        count: 0,
        openHandler: openCart,
        closeHandler: closeCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider };
export default CartContext;
