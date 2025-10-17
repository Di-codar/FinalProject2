import React, { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();


export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    
    const storedCart = localStorage.getItem("okwutech_cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("okwutech_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  
  const clearCart = () => setCartItems([]);

  
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
