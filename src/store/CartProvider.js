import React from 'react'
import CartContext from './CartContext';

const CartProvider = (props) => {
    const addItemToCart = (item) => {};
    const removeItemFromCart = (id) => {};
  
    const cartContext = {
      items: [{name: "Sezar Salad", amount: 2}],
      totalAmount: 0,
      addItem: addItemToCart,
      removeItem: removeItemFromCart,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
