import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useCartContext();

  const [emptyCart, setEmptyCart] = useState();
  const [newQuantity, setNewQuantity] = useState();

  function cartState() {
    if (!cart.length) {
      setEmptyCart(true);
    } else {
      setEmptyCart(false);
    }
  }

  function quantityCart() {
    const allQuantity = [];
    cart.forEach((e) => {
      allQuantity.push(e.quantity);
    });
    const sumAllQuantity = allQuantity.reduce(
      (previousValue, currentValuem, index) => previousValue + currentValuem,
      0
    );
    setNewQuantity(sumAllQuantity);
  }

  useEffect(() => {
    cartState();
    quantityCart();
  }, [cart]);

  return (
    <>
      {emptyCart ? (
        <Link to={`/cart`} className="bg-secondary textNone ml-1 p-1">
          <FaShoppingCart />
        </Link>
      ) : (
        <Link to={`/cart`} className="bg-secondary textNone ml-1 p-1">
          <FaShoppingCart />
          {newQuantity}
        </Link>
      )}
    </>
  );
};

export default CartWidget;
