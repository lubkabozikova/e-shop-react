import { useState, useContext, useEffect } from "react";

import styles from "./OrdersCard.module.css";
import Modal from "../../UI/Modal";
import BackendContext from "../../communicationWithBackend/backend-context";
import Button from "../../UI/Button";

function OrdersCard(props) {
  const [orders, setOrders] = useState({});
  const [meals, setMeals] = useState({});
  const backend = useContext(BackendContext);

  useEffect(() => setOrders(backend.orders), [backend.orders]);
  useEffect(() => setMeals(backend.meals), [backend.meals]);

  const listOrder = (id) => {
    if (!orders[id].delivered) {
      return (
        <li key={id} className={styles.order}>
          <div>
            <ul className={styles.list}>
              {Object.keys(orders[id].meals).map((mealId) => {
                return (
                  <li key={mealId} className={styles.meal}>
                    <div className={styles.amount}>
                      {orders[id].meals[mealId]} x{" "}
                    </div>
                    {meals[mealId].name}
                  </li>
                );
              })}
            </ul>
          </div>
          <Button onClick={() => backend.removeOrder(id)}>Done</Button>
        </li>
      );
    }
  };

  return (
    <Modal>
      <ul className={styles.list}>
        {Object.keys(orders).map((id) => listOrder(id))}
      </ul>
      <Button onClick={props.onClose}>Close</Button>
    </Modal>
  );
}

export default OrdersCard;
