import React, { useState } from "react";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
const Item = ({ data }) => {
  const [animation, setAnimation] = useState("icons8-paid-50 (1).png");
  const { addItem, items, removeItem } = useCart();
  const navigate = useNavigate();
  const { addWishlistItem, getWishlistItem, removeWishlistItem } =
    useWishlist();
  const ad = () => {
    setAnimation("icons8-paid-50 (1).png");
  };
  const add = (item) => {
    addItem(item);
    setAnimation("icons8-paid.gif");
    setTimeout(ad, 650);
  };
  return Array.isArray(data)
    ? data.map((item) => {
        return (
          <div key={item.id} className="item">
            <div>
              <span className="house-type">
                {item.old === false ? "New House" : "Old House"}
              </span>
              <img src={item.image} alt="house" className="house" />
            </div>
            <div className="detail">
              <div className="about-heart">
                {" "}
                <span className="about">{item.bedrooms} rooms</span>
                <img
                  onClick={() => {
                    if (getWishlistItem(item.id) !== undefined) {
                      removeWishlistItem(item.id);
                    } else {
                      addWishlistItem(item);
                    }
                  }}
                  src={
                    getWishlistItem(item.id) !== undefined
                      ? "/images/heart-red.png"
                      : "/images/heart.png"
                  }
                  alt="icon"
                  className="heart"
                />
              </div>
              <div className="price-location">
                <span className="price">{item.price} $</span>
                <div className="location">
                  <img src="images/location.png" alt="location" />
                  <span>{item.city}</span>
                </div>{" "}
              </div>
              <div className="btn-area">
                <span className="area">{item.area} &#13217;</span>
                <img
                  onClick={() => {
                    items.some((element) => {
                      if (element.id === item.id) {
                        return true;
                      }

                      return false;
                    })
                      ? removeItem(item.id)
                      : add(item);
                  }}
                  className="add"
                  src={
                    items.some((element) => {
                      if (element.id === item.id) {
                        return true;
                      }
                      return false;
                    })
                      ? animation
                      : "icons8-paid-50.png"
                  }
                  alt="icon"
                />
                <button
                  onClick={() => {
                    navigate(
                      `/${item.old === true ? "Old" : "New"} Houses/${item.id}`
                    );
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        );
      })
    : null;
};

export default Item;
