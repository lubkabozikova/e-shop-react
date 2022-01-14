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

        <Button type="submit" className={styles.submit} onClick={loginHandler}>
          Log in
        </Button>
        <Button type="button" onClick={props.onClose}>
          Close
        </Button>
      </form>
    </Modal>
  );
}

export default AdminLogin;
