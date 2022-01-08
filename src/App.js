import CartContext from "./store/cart-context";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

import "./App.css";
import { useContext } from "react";

function App() {
  const cart = useContext(CartContext);

  return (
    <div className="App">
      <Header />
      <Meals />
      {cart.open && <Cart />}
    </div>
  );
}

export default App;
