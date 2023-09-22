import React, { useEffect, useState } from "react";
import Houses from "./houses";
import Item from "./Item";
const NewHouses = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    setData(Houses.filter((item) => item.old === false));
  }, []);

  return (
    <div className="items">
      <Item data={data} />
    </div>
  );
};

export default NewHouses;
