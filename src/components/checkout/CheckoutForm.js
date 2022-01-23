import { useReducer, useState } from "react";

import styles from "./CheckoutForm.module.css";
import Button from "../../UI/Button";
import Input from "./CheckoutFormInput";

const reducer = (state, action) => {
  if (action.type === "NAME") return { ...state, name: action.value };
  if (action.type === "ADRESS") return { ...state, adress: action.value };
  if (action.type === "TOWN") return { ...state, town: action.value };
  if (action.type === "PHONE") return { ...state, phone: action.value };
};
const initValid = { name: false, adress: false, town: false, phone: false };
const validatePhone = (value) => /^\+?[0-9]{6,12}$/.test(value);

//////////////////////////////////////////////////////////////////
function CheckoutForm(props) {
  const [contact, dispatchContact] = useReducer(reducer, {});
  const [valid, dispatchValid] = useReducer(reducer, initValid);
  const formValid = valid.name && valid.adress && valid.town && valid.phone;
  const [reset, setReset] = useState(false);

  const submitHandler = (event) => {
    setReset(true);
    event.preventDefault();
    // props.sendContact(contact);
    props.onOrder(contact);
  };

  return (
    <form className={styles.form}>
      <h2>Delivery Information</h2>
      <Input
        inputId="NAME"
        label="Name"
        reset={reset}
        sendData={(value) => dispatchContact({ type: "NAME", value: value })}
        sendValid={(value) => dispatchValid({ type: "NAME", value: value })}
      />
      <Input
        inputId="ADRESS"
        label="Adress"
        reset={reset}
        sendData={(value) => dispatchContact({ type: "ADRESS", value: value })}
        sendValid={(value) => dispatchValid({ type: "ADRESS", value: value })}
      />
      <div className={styles.shortInputs}>
        <Input
          inputId="TOWN"
          label="Town"
          reset={reset}
          sendData={(value) => dispatchContact({ type: "TOWN", value: value })}
          sendValid={(value) => {
            dispatchValid({ type: "TOWN", value: value });
          }}
        />
        <Input
          inputId="PHONE"
          label="Phone Number"
          type="tel"
          reset={reset}
          validate={validatePhone}
          sendData={(value) => dispatchContact({ type: "PHONE", value: value })}
          sendValid={(value) => {
            dispatchValid({ type: "PHONE", value: value });
          }}
        />
      </div>
      <Button
        className={styles.button}
        onClick={submitHandler}
        disabled={!formValid}
      >
        Order
      </Button>
    </form>
  );
}

export default CheckoutForm;
