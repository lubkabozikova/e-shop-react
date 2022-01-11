import styles from "./Header.module.css";
import MealsImage from "./meals.jpg";
import DelitiousFood from "./DelitiousFood";
import CartButton from "./CartButton.js";

function Header(props) {
  return (
    <div>
      <div className={styles.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onCartOpen}></CartButton>
      </div>
      <div className={styles.mainImage}>
        <img src={MealsImage} alt="" />
      </div>
      <DelitiousFood />
    </div>
  );
}

export default Header;
