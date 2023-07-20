import React, { useEffect, useState } from "react";
import Houses from "./houses";
import Item from "./Item";
const NewHouses = () => {
  const [data, setData] = useState("");
  const check = () => {
    return Houses.filter((item) => {
      return item.old === false;
    });
  };
  useEffect(() => {
    setData(check());
  }, []);
  return (
    <div className="items">
      <Item data={data} />
    </div>
  );
};

export default NewHouses;
