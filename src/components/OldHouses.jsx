import React, { useEffect, useState } from "react";
import Houses from "./houses";
import Item from "./Item";
const OldHouses = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    setData(Houses.filter((item) => item.old === true));
  }, []);

  return (
    <div className="items">
      <Item data={data} />
    </div>
  );
};

export default OldHouses;
