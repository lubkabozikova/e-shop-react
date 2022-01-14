import styles from "./Header.module.css";
import MealsImage from "./meals.jpg";
import DelitiousFood from "./DelitiousFood";
import CartButton from "./CartButton.js";
import AdminButtons from "./AdminButtons";

function Header(props) {
  return (
    <div>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        {!props.loggedIn && (
          <CartButton onClick={props.onCartOpen}></CartButton>
        )}
        {props.loggedIn && (
          <div className={styles.adminButtons}>
            <AdminButtons
              onLogOut={props.onLogOut}
              onNewMeal={props.onNewMeal}
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
