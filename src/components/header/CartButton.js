import { useContext } from "react";

import styles from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

function CartButton() {
  const cart = useContext(CartContext);

  return (
    <button className={styles.button} onClick={cart.openHandler}>
      <div className={styles.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={styles.badge}>{cart.count}</div>
    </button>
  );
}

export default CartButton;
