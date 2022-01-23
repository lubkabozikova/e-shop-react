import { useState } from "react";

import AppStateContext from "./app-state-context";

function AppStateContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const onLogIn = () => {
    setLoggedIn(true);
    setContent("meals");
  };
  const onLogOut = () => {
    setLoggedIn(false);
    setContent("meals");
  };

  //choose content from ["meals", "orders", "checkout"];
  //choose modal from ["cart", "login", "addMeal", "orderCard"];
  const [content, setContent] = useState("meals");
  const [modal, setModal] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const mealsOpen = content === "meals";
  const ordersOpen = content === "orders";
  const checkoutOpen = content === "checkout";

  const cartOpen = modalOpen && modal === "cart";
  const loginOpen = modalOpen && modal === "login";
  const addNewMealOpen = modalOpen && modal === "addMeal";
  const orderCardOpen = modalOpen && modal === "orderCard";

  const onOpenAddNewMeal = () => {
    setModalOpen(true);
    setModal("addMeal");
    setContent("meals");
  };

  const onOpenCart = () => {
    setModalOpen(true);
    setModal("cart");
  };

  const onOpenLogin = () => {
    setModalOpen(true);
    setModal("login");
  };

  const onOpenOrdersCard = () => {
    setModalOpen(true);
    setModal("orderCard");
  };

  return (
    <AppStateContext.Provider
      value={{
        loggedIn: loggedIn,
        cartOpen: cartOpen,
        loginOpen: loginOpen,
        addNewMealOpen: addNewMealOpen,
        orderCardOpen: orderCardOpen,
        ordersOpen: ordersOpen,
        checkoutOpen: checkoutOpen,
        mealsOpen: mealsOpen,
        logIn: onLogIn,
        logOut: onLogOut,
        openCart: onOpenCart,
        openLogin: onOpenLogin,
        openAddNewMeal: onOpenAddNewMeal,
        OpenOrdersCard: onOpenOrdersCard,
        openOrders: () => setContent("orders"),
        openCheckout: () => setContent("checkout"),
        openMeals: () => setContent("meals"),
        closeModal: () => setModalOpen(false),
      }}
    >
      {props.children}
    </AppStateContext.Provider>
  );
}

export default AppStateContextProvider;
