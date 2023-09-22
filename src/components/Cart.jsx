import React from "react";
import { useCart } from "react-use-cart";
import Item from "./Item";

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  if (isEmpty) return <h1>Your cart is empty</h1>;
  return (
    <div className="items">
      <Item data={items} />
    </div>
  );
};

export default Cart;
