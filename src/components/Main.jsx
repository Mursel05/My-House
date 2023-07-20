import React, { useState } from "react";
import Search from "./Search";
const Main = () => {
  const [argumentOld, setArgumentOld] = useState("types hidden");
  const [argumentNew, setArgumentNew] = useState("types hidden");
  const [transformOld, setTransformOld] = useState("dropdown-part");
  const [transformNew, setTransformNew] = useState("dropdown-part");

  const openDivOld = () => {
    setArgumentOld("types");
    setTransformOld("transform-open dropdown-part");
  };
  const closeDivOld = () => {
    setArgumentOld("types hidden");
    setTransformOld("transform-close dropdown-part");
  };
  const openDivNew = () => {
    setArgumentNew("types");

    setTransformNew("transform-open dropdown-part");
  };
  const closeDivNew = () => {
    setArgumentNew("types hidden");
    setTransformNew("transform-close dropdown-part");
  };
  return (
    <div className="main">
      <span className="question">DO YOU WANT TO BUY A HOUSE?</span>
      <span className="explanation">
        {" "}
        WE ARE THE LARGEST REAL ESTATE AGENCY WITH APPROXIMATELY 40,000
        PROPERTIES FOR SALE
      </span>
      <Search />
      <div className="dropdown">
        <div
          className={transformOld}
          onMouseEnter={() => {
            openDivOld();
          }}
          onMouseLeave={() => {
            closeDivOld();
          }}
        >
          <span className="kind">Old Houses</span>
          <div className={argumentOld}>
            <span className="type">Flat</span>
            <span className="type">Garden</span>
            <span className="type">Villa</span>
          </div>
        </div>
        <div
          className={transformNew}
          onMouseEnter={() => {
            openDivNew();
          }}
          onMouseLeave={() => {
            closeDivNew();
          }}
        >
          <span className="kind">New Houses</span>
          <div className={argumentNew}>
            <span className="type">Flat</span>
            <span className="type">Garden</span>
            <span className="type">Villa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
