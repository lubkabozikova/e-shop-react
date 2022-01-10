import { useContext, useEffect, useState } from "react";

import styles from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

function CartButton() {
  const cart = useContext(CartContext);
  const [buttonBumping, setButtonBumping] = useState(false);

  // const btnStyles = `${styles.button} ${styles.bump}`
  const { count } = cart;
  useEffect(() => {
    if (count === 0) return;
    setButtonBumping(true);
    const timer = setTimeout(() => {
      setButtonBumping(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <button
      className={`${styles.button} ${buttonBumping && styles.bump}`}
      onClick={cart.openHandler}
    >
      <div className={styles.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={styles.badge}>{cart.count}</div>
    </button>
  );
}

export default CartButton;
