import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

  //logica
  const [cart, setCart] = useState([]);
  
  //Validar si el item esta en el carrito
  const isInCart = (id) => cart.find((prod) => prod.id === id);

  //Agregar item al carrito
  const addToCart = (producto, cantidad) => {
    const newCart = [...cart];

    const productoIsInCart = isInCart(producto.id);

    if (productoIsInCart) {
      newCart[
        newCart.findIndex((prod) => prod.id === productoIsInCart.id)
      ].quantity += cantidad;
      setCart(newCart);
      return;
    }

    producto.quantity = cantidad;
    setCart([...newCart, producto]);
  };

  //Borrar del carrito
  const deleteFromCart = (producto) => {
    const newCart = [...cart];

    const productoIsInCart = isInCart(producto.id);

    if (!productoIsInCart) {
      return
    }

    const deleteProduct = newCart.filter((prod) => prod.id !== producto.id);

    setCart(deleteProduct);
  };

  // Borrar carrito
  const deleteCart = () => setCart([]);

  console.log(cart)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        deleteCart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
