import CartContext from "./store/cart-context";
import Header from "./components/header/Header";
import MealsList from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

import styles from "./App.module.css";
import { useContext } from "react";

function App() {
  const cart = useContext(CartContext);

  return (
    <div className={styles.App}>
      <Header />
      <MealsList />
      {cart.open && <Cart />}
    </div>
  );
}

export default App;
