import { useContext, useEffect, useState, useCallback } from "react";

import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import BackendContext from "../../communicationWithBackend/backend-context";

function Cart(props) {
  const backend = useContext(BackendContext);
  const [meals, setMeals] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [total, setTotal] = useState(0);
  const cart = useContext(CartContext);
  const order = cart.order;

  const loadMeals = useCallback(() => {
    const load = async () => {
      const loadedMeals = await backend.meals;
      setMeals(loadedMeals);
      setLoaded(true);
    };
    load();
  }, [backend]);
  useEffect(() => loadMeals(), [loadMeals, backend]);

  useEffect(() => {
    let tempTotal = 0;
    if (loaded) {
      Object.keys(order).forEach((id) => {
        // const amount = order.hasOwnProperty(id) ? order[id] : 0;
        console.log(tempTotal + " + " + order[id] + " * " + meals[id].price);
        tempTotal = +tempTotal + +order[id] * +meals[id].price;
        console.log(tempTotal);
      });
    }
    setTotal(tempTotal);
  }, [meals, order, loaded]);

  const orderHandler = async () => {
    await backend.addOrder(order);
    cart.clearCartHandler();
    props.onCartClose();
    setTotal(0);
  };

  const listItem = (id) => {
    return (
      <CartItem
        key={id}
        name={meals[id].name}
        price={meals[id].price}
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
    <Modal>
      {loaded && (
        <ul className={styles.cartItems}>
          {Object.keys(order).map((id) => listItem(id))}
        </ul>
      )}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <Button onClick={props.onCartClose}>Close</Button>
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
