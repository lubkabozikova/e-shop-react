import { useState } from "react";

import AppStateContext from "./app-state-context";

function AppStateContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [addNewMealOpen, setAddNewMealOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [mealsOpen, setMealsOpen] = useState(true);

  const onLogIn = () => setLoggedIn(true);
  const onLogOut = () => setLoggedIn(false);
  const onOpenCart = () => setCartOpen(true);
  const onCloseCart = () => setCartOpen(false);
  const onOpenLogin = () => setLoginOpen(true);
  const onCloseLogin = () => setLoginOpen(false);
  const onOpenAddNewMeal = () => setAddNewMealOpen(true);
  const onCloseAddNewMeal = () => setAddNewMealOpen(false);
  const onOpenOrders = () => setOrdersOpen(true);
  const onCloseOrders = () => setOrdersOpen(false);
  const onOpenCheckout = () => setCheckoutOpen(true);
  const onCloseCheckout = () => setCheckoutOpen(false);
  const onOpenMeals = () => setMealsOpen(true);
  const onCloseMeals = () => setMealsOpen(false);

  return (
    <AppStateContext.Provider
      value={{
        loggedIn: loggedIn,
        cartOpen: cartOpen,
        loginOpen: loginOpen,
        addNewMealOpen: addNewMealOpen,
        ordersOpen: ordersOpen,
        checkoutOpen: checkoutOpen,
        mealsOpen: mealsOpen,
        logIn: onLogIn,
        logOut: onLogOut,
        openCart: onOpenCart,
        openLogin: onOpenLogin,
        openAddNewMeal: onOpenAddNewMeal,
        openOrders: onOpenOrders,
        openCheckout: onOpenCheckout,
        openMeals: onOpenMeals,
        closeCart: onCloseCart,
        closeLogin: onCloseLogin,
        closeAddNewMeal: onCloseAddNewMeal,
        closeOrders: onCloseOrders,
        closeCheckout: onCloseCheckout,
        closeMeals: onCloseMeals,
      }}
    >
      {props.children}
    </AppStateContext.Provider>
  );
}

export default AppStateContextProvider;
