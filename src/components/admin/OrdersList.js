import { useState, useContext, useEffect } from "react";

import BackendContext from "../../communicationWithBackend/backend-context";
import MainList from "../../UI/MainList";
import styles from "./OrdersList.module.css";
import Button from "../../UI/Button";

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const backend = useContext(BackendContext);

  useEffect(() => setOrders(backend.orders), [backend.orders]);

  const ordersList = orders.map((order) => {
    return {
      id: order.id,
      item: (
        <div className={styles.meal}>
          <ul>
            {Object.keys(order.meals).map((mealId) => {
              return (
                <li key={mealId} className={styles.mealItem}>
                  <div className={styles.amount}>
                    {order.meals[mealId].amount} x{" "}
                  </div>
                  {order.meals[mealId].name}
                </li>
              );
            })}
          </ul>
          <Button onClick={() => backend.removeOrder(order.id)}>Done</Button>
        </div>
      ),
    };
  });

  return <MainList items={ordersList} />;
}

export default OrdersList;
