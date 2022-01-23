import { useContext, useRef } from "react";

import CartContext from "../../store/cart-context";
import styles from "./MealForm.module.css";
import Button from "../../UI/Button";

function MealForm(props) {
  const cart = useContext(CartContext);

  const amount = useRef();

  const addHandler = (event) => {
    event.preventDefault();
    cart.addHandler(props.id, amount.current.value, props.name, props.price);
    amount.current.value = 1;
  };
  return (
    <form id={`form${props.id}`} className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="amount">Amount</label>
        <input
          id={`input${props.id}`}
          type="number"
          min="1"
          step="1"
          defaultValue="1"
          ref={amount}
        ></input>
      </div>
      <Button onClick={addHandler}>+Add</Button>
    </form>
  );
}

export default MealForm;
