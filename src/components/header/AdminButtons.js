import { Fragment, useContext } from "react";

import BackendContext from "../../communicationWithBackend/backend-context";
import styles from "./HeaderButton.module.css";

function AdminButtons(props) {
  const backend = useContext(BackendContext);

  return (
    <Fragment>
      <button className={styles.button}>
        Orders <div className={styles.badge}></div>
      </button>
      <button className={styles.button} onClick={props.onNewMeal}>
        New Meal
      </button>
      <button className={styles.button} onClick={props.onLogOut}>
        Log Out
      </button>
    </Fragment>
  );
}

export default AdminButtons;
