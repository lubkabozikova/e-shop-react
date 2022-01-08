import classes from "./Meals.module.css";
import meals from "../dummy_meals";
import MealItem from "./MealItem";

function MealsList() {
  const listMeal = (meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      >
        {meal.name}
      </MealItem>
    );
  };

  return (
    <div className={classes.meals}>
      <ul>{meals.map((meal) => listMeal(meal))}</ul>
    </div>
  );
}

export default MealsList;
