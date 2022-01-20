import { createContext } from "react";

const AppStateContext = createContext({
  loggedIn: false,
  cartOpen: false,
  loginOpen: false,
  addNewMealOpen: false,
  ordersOpen: false,
  checkoutOpen: false,
  mealsOpen: true,
  logOut: () => {},
  openCart: () => {},
  openLogin: () => {},
  openOrders: () => {},
  openCheckout: () => {},
  openMeals: () => {},
  closeCart: () => {},
  closeLogin: () => {},
  closeOrders: () => {},
  closeCheckout: () => {},
  closeMeals: () => {},
});

export default AppStateContext;
