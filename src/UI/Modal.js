import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={styles.backdrop}>
      <div className={`${styles.modal} ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
