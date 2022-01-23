import { useContext } from "react";

import styles from "./App.module.css";
import Header from "./components/header/Header";
import MealsList from "./components/meals/Meals";
import OrdersList from "./components/admin/OrdersList";
import Checkout from "./components/checkout/Checkout";
import Cart from "./components/cart/Cart";
import AdminLogin from "./components/admin/AdminLogin";
import NewMealCard from "./components/admin/NewMealCard";
// import OrdersCard from "./components/admin/OrdersCard";
import AppStateContext from "./store/app-state-context";

function App() {
  const appState = useContext(AppStateContext);

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.content}>
        {appState.mealsOpen && <MealsList loggedIn={appState.loggedIn} />}
        {appState.ordersOpen && <OrdersList />}
        {appState.checkoutOpen && <Checkout />}
      </div>
      {appState.cartOpen && (
        <Cart
          onCartClose={appState.closeModal}
          onCheckOut={appState.openCheckout}
        />
      )}
      {!appState.loggedIn && (
        <div className={styles.admin}>
          <button onClick={appState.openLogin}>Admin</button>
        </div>
      )}
      {appState.loginOpen && !appState.loggedIn && (
        <AdminLogin
          onClose={appState.closeModal}
          onLogIn={appState.logIn}
        ></AdminLogin>
      )}
      {appState.addNewMealOpen && <NewMealCard onClose={appState.closeModal} />}
    </div>
  );
}

export default App;
