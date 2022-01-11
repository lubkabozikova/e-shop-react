import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={styles.item}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${props.price.toFixed(2)}</span>
          <span className={styles.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button>-</button>
        <button>+</button>
        {/* <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button> */}
      </div>
    </li>
  );
};

export default CartItem;
