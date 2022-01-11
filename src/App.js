import { useState } from "react";

import Header from "./components/header/Header";
import MealsList from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import styles from "./App.module.css";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () =>
    setCartOpen((prevCartOpen) => {
      return !prevCartOpen;
    });

  return (
    <div className={styles.App}>
      <Header onCartOpen={toggleCart} />
      <MealsList />
      {cartOpen && <Cart onCartClose={toggleCart} />}
    </div>
  );
}

export default App;
