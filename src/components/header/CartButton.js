import { useContext, useEffect, useState } from "react";

import styles from "./HeaderButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

function CartButton(props) {
  const cart = useContext(CartContext);
  const [buttonBumping, setButtonBumping] = useState(false);

  const count = cart.count;
  useEffect(() => {
    if (count === 0) return;
    setButtonBumping(true);
    setTimeout(() => {
      setButtonBumping(false);
    }, 300);
  }, [count]);

  return (
    <button
      className={`${styles.button} ${buttonBumping && styles.bump}`}
      onClick={props.onClick}
    >
      <div className={styles.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={styles.badge}>{count}</div>
    </button>
  );
}

export default CartButton;
