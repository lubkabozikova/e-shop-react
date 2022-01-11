import { Fragment, useContext } from "react";

import modalStyles from "./Modal.module.css";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cart = useContext(CartContext);
  const order = cart.order;
  const keys = Object.keys(order.price);

  let total = 0;
  for (const key of keys) {
    total = +total + +order.price[key] * +order.amount[key];
  }

  const listItem = (id) => {
    if (order.amount[id] > 0) {
      return (
        <CartItem
          key={id}
          name={order.name[id]}
          price={order.price[id]}
          amount={order.amount[id]}
          onRemove={() => {
            cart.removeHandler(id, 1);
          }}
          onAdd={() => {
            cart.addHandler(id, 1);
          }}
        ></CartItem>
      );
    }
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
          {cart.count > 0 && <button className={styles.order}>Order</button>}
        </div>
      </div>
    </Fragment>
  );
}

export default Cart;
