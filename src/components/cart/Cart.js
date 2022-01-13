import { Fragment, useContext } from "react";

import modalStyles from "./Modal.module.css";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cart = useContext(CartContext);
  const meals = cart.meals;
  const order = cart.order;
  const keys = Object.keys(order);

  let total = 0;
  for (const id of keys) {
    total = +total + +meals.price[id] * +order[id];
  }

  const orderHandler = () => {
    cart.clearCartHandler();
    props.onCartClose();
  };

  const listItem = (id) => {
    return (
      <CartItem
        key={id}
        name={meals.name[id]}
        price={meals.price[id]}
        amount={order[id]}
        onRemove={() => {
          cart.removeHandler(id, 1);
        }}
        onAdd={() => {
          cart.addHandler(id, 1);
        }}
      ></CartItem>
    );
  };

  return (
    <Fragment>
      <div className={modalStyles.backdrop}></div>
      <div className={modalStyles.modal}>
        <ul className={styles.cartItems}>{keys.map((id) => listItem(id))}</ul>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={props.onCartClose}>Close</button>
          {cart.count > 0 && (
            <button className={styles.order} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Cart;
