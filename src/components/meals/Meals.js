import { useContext } from "react";

import classes from "./Meals.module.css";
import CartContext from "../../store/cart-context";
import MealItem from "./MealItem";

function MealsList() {
  const cart = useContext(CartContext);

  const listMeal = (id, name, description, price) => {
    return (
      <MealItem
        key={id}
        id={id}
        name={name}
        description={description}
        price={price}
      >
        {name}
      </MealItem>
    );
  };

  return (
    <div className={classes.meals}>
      <ul>
        {cart.meals.id.map((id) =>
          listMeal(
            id,
            cart.meals.name[id],
            cart.meals.description[id],
            cart.meals.price[id]
          )
        )}
      </ul>
    </div>
  );
}

export default MealsList;
