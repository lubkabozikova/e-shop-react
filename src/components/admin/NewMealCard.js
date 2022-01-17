import { useRef, useContext, useEffect } from "react";

import styles from "./NewMealCard.module.css";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import BackendContext from "../../communicationWithBackend/backend-context";

function NewMealCard(props) {
  const backend = useContext(BackendContext);
  const name = useRef();
  const description = useRef();
  const dollar = useRef();
  const cent = useRef();

  useEffect(() => {
    document.getElementById("name").focus();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    const meal = {
      name: name.current.value,
      price: +dollar.current.value + 0.01 * +cent.current.value,
      description: description.current.value,
    };
    props.onClose();
    await backend.addMeal(meal);
  };

  return (
    <Modal className={styles.modal}>
      <form className={styles.form}>
        <label htmlFor="name">Meal Name</label>
        <input id="name" type="text" maxLength="20" ref={name}></input>
        <label htmlFor="description">Meal Description</label>
        <input
          id="description"
          type="text"
          maxLength="30"
          ref={description}
        ></input>
        <label htmlFor="dollar">Meal Price</label>
        <div className={styles.price}>
          <label htmlFor="dollar">$</label>
          <input
            id="dollar"
            type="number"
            min="0"
            max="99"
            step="1"
            ref={dollar}
          ></input>
          <label htmlFor="cent">.</label>
          <input
            id="cent"
            type="number"
            min="0"
            max="99"
            step="1"
            ref={cent}
          ></input>
        </div>
        <Button type="submit" className={styles.submit} onClick={submitHandler}>
          Add Meal
        </Button>
        <Button type="button" onClick={props.onClose}>
          Close
        </Button>
      </form>
    </Modal>
  );
}

export default NewMealCard;
