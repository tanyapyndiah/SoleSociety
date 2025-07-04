import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

// const shoppingCart = [
//   {
//     name: "Nike Air Max 270",
//     size: "M9/W10.5",
//     quantity: 2,
//     price: 120.00,
//     image: "../assets/Shoe.png"
//   },
//   {
//     name: "Adidas Ultraboost",
//     size: "M10/W11.5",
//     quantity: 1,
//     price: 150.00,
//     image: "../assets/Shoe.png"
//   },
//   {
//     name: "New Balance 574",
//     size: "M8/W9.5",
//     quantity: 3,
//     price: 89.99,
//     image: "../assets/Shoe.png"
//   },
//   {
//     name: "Puma RS-X",
//     size: "M11/W12.5",
//     quantity: 1,
//     price: 99.95,
//     image: "../assets/Shoe.png"
//   }
// ];

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const updateQuantity = useCallback((name, quantity) => {
        setCart((prev) =>
        prev.map((item) =>
            item.name === name ? { ...item, quantity } : item
        )
        );
    }, []);

    const addToCart = useCallback((item) => {
      const existing = cart.find(shoe => shoe.name === item.name && shoe.size === item.size);
        if (existing) {
            updateQuantity(item.name, parseInt(existing.quantity) + parseInt(item.quantity));
        } else {
            setCart((prev) => [...prev, item]);
        }
    }, [cart, updateQuantity]);

    const removeFromCart = useCallback((name) => {
        setCart((prev) => prev.filter((item) => item.name !== name));
    }, []);

    const clearCart = useCallback(()=> setCart([]), [])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}