import { useContext } from "react";

import styles from "./App.module.css";
import Header from "./components/header/Header";
import MealsList from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import AdminLogin from "./components/admin/AdminLogin";
import NewMealCard from "./components/admin/NewMealCard";
import OrdersCard from "./components/admin/OrdersCard";
import AppStateContext from "./store/app-state-context";

function App() {
  const appState = useContext(AppStateContext);

  return (
    <div className={styles.App}>
      <Header />
      <MealsList loggedIn={appState.loggedIn} />
      {appState.cartOpen && <Cart onCartClose={appState.closeCart} />}
      {!appState.loggedIn && (
        <div className={styles.admin}>
          <button onClick={appState.openLogin}>Admin</button>
        </div>
      )}
      {appState.loginOpen && !appState.loggedIn && (
        <AdminLogin
          onClose={appState.closeLogin}
          onLogIn={appState.logIn}
        ></AdminLogin>
      )}
      {appState.addNewMealOpen && (
        <NewMealCard onClose={appState.closeAddNewMeal} />
      )}
      {appState.ordersOpen && (
        <OrdersCard onClose={appState.closeOrders}></OrdersCard>
      )}
    </div>
  );
}

export default App;
