import { useContext } from "react";

import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import BackendContext from "../../communicationWithBackend/backend-context";

function Cart(props) {
  const backend = useContext(BackendContext);
  const cart = useContext(CartContext);
  const total = cart.total;
  const order = cart.order;

  const orderHandler = () => {
    // console.log(order);
    props.onCartClose();
    props.onCheckOut();
    // backend.addOrder({ delivered: false, meals: order });
    // cart.clearCartHandler();
  };

  const listItem = (id) => {
    return (
      <CartItem
        key={id}
        name={order[id].name}
        price={order[id].price}
        amount={order[id].amount}
        onRemove={() => {
          cart.removeHandler(id, 1, order[id].name, order[id].price);
        }}
        onAdd={() => {
          cart.addHandler(id, 1, order[id].name, order[id].price);
        }}
      ></CartItem>
    );
  };

  return (
    <Modal>
      <ul className={styles.cartItems}>
        {Object.keys(order).map((id) => listItem(id))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <Button onClick={props.onCartClose} close>
          Close
        </Button>
        {cart.count > 0 && (
          <Button className={styles.order} onClick={orderHandler}>
            Order
          </Button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
