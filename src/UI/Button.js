import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${styles.button} ${props.className} ${
        props.close && styles.close
      } ${props.header && styles.header}`}
      disabled={!!props.disabled ? true : undefined}
    >
      <div className={styles.content}>{props.children}</div>
    </button>
  );
}

export default Button;
