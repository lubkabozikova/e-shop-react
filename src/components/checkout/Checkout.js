import { useContext, useState } from "react";

import BackendContext from "../../communicationWithBackend/backend-context";
import CartContext from "../../store/cart-context";
import AppStateContext from "../../store/app-state-context";
import styles from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm";
import Button from "../../UI/Button";

function Checkout() {
  const backend = useContext(BackendContext);
  const cart = useContext(CartContext);
  const order = cart.order;
  const appState = useContext(AppStateContext);
  // const [contact, setContact] = useState();

  // const getContact = (value) => setContact(value);

  const backToCartHandler = () => {
    appState.openMeals();
    appState.openCart();
  };

  const orderHandler = (contact) => {
    backend.addOrder({ delivered: false, meals: order, contact: contact });
    cart.clearCartHandler();
    appState.openMeals();
  };

  return (
    <div className={styles.checkout}>
      <div className={`${styles.summary} ${styles.column}`}>
        <h2>Order Summary</h2>
        <ul>
          {Object.keys(order).map((mealId) => {
            return (
              <li key={mealId}>
                <div className={styles.amount}>{order[mealId].amount} x </div>
                <div className={styles.name}>{order[mealId].name}</div>
                <div className={styles.price}>
                  ${(order[mealId].price * order[mealId].amount).toFixed(2)}
                </div>
              </li>
            );
          })}
        </ul>
        <h3>Total: ${cart.total.toFixed(2)}</h3>
        <Button onClick={backToCartHandler} close>
          Back to cart
        </Button>
      </div>
      <div className={styles.column}>
        <CheckoutForm onOrder={orderHandler} />
      </div>
    </div>
  );
}

export default Checkout;
