import React, { useState, useReducer } from "react";
import BannerCard from "./components/BannerCard/BannerCard";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import Header from "./Layout/Header/Header";
import CartContext from "./store/CartContext";
function App() {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };
  const hideModal = () => {
    setModalShow(false);
  };

  const initialState = {
    items: [],
    totalAmount: 0,
  };
  const reducer = (state, action) => {
    let orderList = [...state.items];
    let updatedAmount;
    let exsistingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (action.type === "ADD") {
      updatedAmount =
        state.totalAmount + action.item.price * action.item.amount;

      if (exsistingItemIndex >= 0) {
        const exsistingItem = orderList[exsistingItemIndex];
        const updatedItem = {
          ...exsistingItem,
          amount: exsistingItem.amount + action.item.amount,
        };
        orderList[exsistingItemIndex] = updatedItem;
      } else {
        orderList = state.items.concat(action.item);
      }
    }
    if (action.type === "REMOVE") {
      updatedAmount = state.totalAmount.toFixed(2) - action.item.price.toFixed(2);

      if (action.item.amount > 1) {
        let updatedItem = {
          ...action.item,
          amount: action.item.amount - 1,
        };
        
        orderList[exsistingItemIndex] = updatedItem;
      } else
        orderList = state.items.filter((item) => item.id !== action.item.id);
    }
    return {
      items: orderList,
      totalAmount: updatedAmount,
    };
  };
  const [CartState, dispatchCart] = useReducer(reducer, initialState);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemFromCart = (item) => {
    dispatchCart({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: CartState.items,
    totalAmount: CartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      <Header onShowModal={showModal} />
      <main>
        <BannerCard />
        <Meals />
        {modalShow && <Cart onCloseModal={hideModal} />}
      </main>
    </CartContext.Provider>
  );
}

export default App;
