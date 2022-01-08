import "./Header.css";
import MealsImage from "./meals.jpg";
import DelitiousFood from "./DelitiousFood";
import CartButton from "./CartButton.js";

function Header() {
  return (
    <div>
      <div className="header">
        <h1>ReactMeals</h1>
        <CartButton></CartButton>
      </div>
      <div className="main-image">
        <img src={MealsImage} alt="" />
      </div>
      <DelitiousFood />
    </div>
  );
}

export default Header;
