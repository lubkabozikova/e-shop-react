import { useContext, useEffect, useState, useCallback } from "react";

import classes from "./Meals.module.css";
import BackendContext from "../../communicationWithBackend/backend-context";
import MealItem from "./MealItem";

function MealsList(props) {
  const backend = useContext(BackendContext);
  const [meals, setMeals] = useState({});

  useEffect(() => setMeals(backend.meals), [backend.meals]);

  const removeMealHandler = (id) => {
    backend.removeMeal(id);
  };

  const listMeal = (id, name, price, description) => {
    return (
      <MealItem
        key={id}
        id={id}
        name={name}
        price={price}
        description={description}
        loggedIn={props.loggedIn}
        onRemove={removeMealHandler}
      >
        {name}
      </MealItem>
    );
  };

  return (
    <div className={classes.meals}>
      <ul>
        {Object.keys(meals).map((id) => {
          return listMeal(
            id,
            meals[id].name,
            meals[id].price,
            meals[id].description
          );
        })}
      </ul>
    </div>
  );
}

export default MealsList;
