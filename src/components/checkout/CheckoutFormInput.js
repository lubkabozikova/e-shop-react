import { useState, useEffect, useRef } from "react";

import styles from "./CheckoutFormInput.module.css";

const defaultValidate = (value) => /^\w+$/.test(value);

function Input(props) {
  const [value, setValue] = useState("");
  const validate = props.validate || defaultValidate;
  const valid = validate(value);
  const [wasTouched, setWasTouched] = useState(false);
  const showError = !valid && wasTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
    props.sendData(event.target.value);
  };

  const sendValid = useRef(props.sendValid);
  useEffect(() => {
    sendValid.current(valid);
  }, [valid]);

  const reset = props.reset;
  useEffect(() => {
    if (reset) {
      setValue("");
      setWasTouched(false);
    }
  }, [reset]);

  return (
    <div className={`${styles.input} ${showError && styles.error}`}>
      <label htmlFor={props.inputId}>{props.label}</label>
      <input
        id={props.inputId}
        type={props.type || "text"}
        value={value}
        onChange={valueChangeHandler}
        onBlur={() => setWasTouched(true)}
      ></input>
    </div>
  );
}

export default Input;
