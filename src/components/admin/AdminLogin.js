import { useRef, useEffect } from "react";

import styles from "./AdminLogin.module.css";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";

function AdminLogin(props) {
  const password = useRef("");
  useEffect(() => {
    document.getElementById("password").focus();
  }, []);

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(password.current.value);
    document.getElementById("loginForm").reset();
    props.onClose();
    props.onLogIn();
  };

  return (
    <Modal className={styles.card}>
      <form className={styles.form} id="loginForm">
        <label htmlFor="password">Password</label>
        <input id="password" type="text" ref={password}></input>
        <div>
          <Button type="button" onClick={props.onClose} close>
            Close
          </Button>
          <Button
            type="submit"
            className={styles.submit}
            onClick={loginHandler}
          >
            Log in
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default AdminLogin;
