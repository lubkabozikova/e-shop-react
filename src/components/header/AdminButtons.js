import { Fragment, useContext, useEffect, useState } from "react";

import BackendContext from "../../communicationWithBackend/backend-context";
import styles from "./HeaderButton.module.css";
import Button from "../../UI/Button";

function AdminButtons(props) {
  const backend = useContext(BackendContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const load = async () => {
      let orders = {};
      orders = await backend.orders;
      setCount(Object.keys(orders).length);
    };
    load();
  }, [backend]);

  return (
    <Fragment>
      <Button header className={styles.button} onClick={props.onOpenOrders}>
        Orders <div className={styles.badge}>{count}</div>
      </Button>
      <Button header className={styles.button} onClick={props.onOpenMeals}>
        Meals
      </Button>
      <Button header className={styles.button} onClick={props.onNewMeal}>
        New Meal
      </Button>
      <Button header className={styles.button} onClick={props.onLogOut}>
        Log Out
      </Button>
    </Fragment>
  );
}

export default AdminButtons;
