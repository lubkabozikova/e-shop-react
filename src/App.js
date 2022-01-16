import { useState } from "react";

import styles from "./App.module.css";
import Header from "./components/header/Header";
import MealsList from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import AdminLogin from "./components/admin/AdminLogin";
import NewMealCard from "./components/admin/NewMealCard";
import OrdersCard from "./components/admin/OrdersCard";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [addNewMeal, setAddNewMeal] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);

  const toggle = {
    cart: () => {
      setCartOpen((prev) => {
        return !prev;
      });
    },
    login: () => {
      setLoginOpen((prev) => {
        return !prev;
      });
    },
    loggedIn: () => {
      setLoggedIn((prev) => {
        return !prev;
      });
    },
    newMeal: () => {
      setAddNewMeal((prev) => {
        return !prev;
      });
    },
    orders: () => {
      setOrdersOpen((prev) => {
        return !prev;
      });
    },
  };

  return (
    <div className={styles.App}>
      <Header
        onCartOpen={toggle.cart}
        loggedIn={loggedIn}
        onLogOut={toggle.loggedIn}
        onNewMeal={toggle.newMeal}
        onOpenOrders={toggle.orders}
      />
      <MealsList loggedIn={loggedIn} />
      {cartOpen && <Cart onCartClose={toggle.cart} />}
      <div className={styles.admin}>
        <button onClick={toggle.login}>Admin</button>
      </div>
      {loginOpen && !loggedIn && (
        <AdminLogin
          onClose={toggle.login}
          onLogIn={toggle.loggedIn}
        ></AdminLogin>
      )}
      {addNewMeal && <NewMealCard onClose={toggle.newMeal} />}
      {ordersOpen && <OrdersCard onClose={toggle.orders}></OrdersCard>}
    </div>
  );
}

export default App;
