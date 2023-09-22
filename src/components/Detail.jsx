import React from "react";
import { useParams } from "react-router-dom";
import Houses from "./houses";

const Detail = () => {
  const { id } = useParams();
  const house = Houses.find((item) => id == item.id);
  console.log(house);
  return (
    <div>
      <img src={house.image} alt="house" />
    </div>
  );

};

export default Detail;
