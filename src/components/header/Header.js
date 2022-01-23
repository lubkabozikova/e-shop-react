import { useContext } from "react";

import styles from "./Header.module.css";
import MealsImage from "./meals.jpg";
import DelitiousFood from "./DelitiousFood";
import CartButton from "./CartButton.js";
import AdminButtons from "./AdminButtons";
import AppStateContext from "../../store/app-state-context";

function Header() {
  const appState = useContext(AppStateContext);

  return (
    <div>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        {!appState.loggedIn && (
          <CartButton onClick={appState.openCart}></CartButton>
        )}
        {appState.loggedIn && (
          <div className={styles.adminButtons}>
            <AdminButtons
              onLogOut={appState.logOut}
              onNewMeal={appState.openAddNewMeal}
              onOpenOrders={appState.openOrders}
              onOpenMeals={appState.openMeals}
            />
          </div>
        )}
      </div>
      <div className={styles.mainImage}>
        <img src={MealsImage} alt="" />
      </div>
      <DelitiousFood />
    </div>
  );
}

export default Header;
