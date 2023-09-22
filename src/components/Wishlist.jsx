import React from "react";
import Item from "./Item";
import { useWishlist } from "react-use-wishlist";
function Wishlist() {
  const { isWishlistEmpty, totalWishlistItems, items, removeWishlistItem } =
    useWishlist();

  if (isWishlistEmpty) return <p>Your wishlist is empty</p>;
  return (
    <div className="items">
      <Item data={items} />
    </div>
  );
}

export default Wishlist;
