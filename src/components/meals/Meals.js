import { useContext, useEffect, useState } from "react";

import BackendContext from "../../communicationWithBackend/backend-context";
import MainList from "../../UI/MainList";
import styles from "./Meals.module.css";
import Button from "../../UI/Button";
import MealForm from "./MealForm";

function MealsList(props) {
  const backend = useContext(BackendContext);
  const [meals, setMeals] = useState([]);
  useEffect(() => setMeals(backend.meals), [backend.meals]);

  const mealItems = meals.map((meal) => {
    return {
      id: meal.id,
      item: (
        <div className={styles.meal}>
          <div>
            <h3>{meal.name}</h3>
            <p className={styles.description}>{meal.description}</p>
            <p className={styles.price}>${meal.price.toFixed(2)}</p>
          </div>
          {!props.loggedIn && (
            <MealForm id={meal.id} name={meal.name} price={meal.price} />
          )}
          {props.loggedIn && (
            <Button
              className={styles.button}
              onClick={() => backend.removeMeal(meal.id)}
            >
              Remove
            </Button>
          )}
        </div>
      ),
    };
  });

  return <MainList items={mealItems} />;
}

export default MealsList;
