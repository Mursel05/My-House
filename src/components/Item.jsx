import React from "react";

const Item = ({ data }) => {
  return Array.isArray(data)
    ? data.map((item, index) => {
        return (
          <div key={index} className="item">
            <div>
              <span className="house-type">
                {item.old === false ? "New House" : "Old House"}
              </span>
              <div className="location">
                <img src="images/location.png" alt="location" />
                <span>{item.city}</span>
              </div>{" "}
              <img src={item.image} alt="house" className="house" />
            </div>
            <div className="detail">
              <span className="about">{item.bedrooms} rooms Old Apartment</span>
              <span className="price">{item.price} $</span>
              <div className="btn-area">
                <span className="area">{item.area} &#13217;</span>
                <button>Details</button>
              </div>
            </div>
          </div>
        );
      })
    : null;
};

export default Item;
