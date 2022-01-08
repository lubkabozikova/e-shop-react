import { useContext } from "react";

import "./CartButton.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

function CartButton() {
  const cart = useContext(CartContext);

  return (
    <button className="header-button" onClick={cart.openHandler}>
      <div className="icon">
        <CartIcon />
      </div>
      Your Cart
      <div className="badge">{cart.count}</div>
    </button>
  );
}

export default CartButton;
