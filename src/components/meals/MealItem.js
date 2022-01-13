import { useContext, useRef } from "react";

import styles from "./MealItem.module.css";
import formStyles from "./MealItemForm.module.css";
import CartContext from "../../store/cart-context";

function MealItem(props) {
  const cart = useContext(CartContext);

  const amount = useRef();

  const addHandler = (event) => {
    event.preventDefault();
    cart.addHandler(props.id, amount.current.value);
    document.getElementById("form" + props.id).reset();
  };

  return (
    <li id={props.id}>
      <div className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <p className={styles.description}>{props.description}</p>
          <p className={styles.price}>${props.price.toFixed(2)}</p>
        </div>
        <form id={`form${props.id}`} className={formStyles.form}>
          <div className={formStyles.input}>
            <label htmlFor="amount">Amount</label>
            <input
              id="input"
              type="number"
              min="1"
              step="1"
              defaultValue="1"
              ref={amount}
            ></input>
          </div>
          <button onClick={addHandler}>+Add</button>
        </form>
      </div>
    </li>
  );
}

export default MealItem;
