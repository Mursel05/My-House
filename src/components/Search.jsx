import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="input-div">
        <label htmlFor="a">Type</label>
        <select id="a">
          <option>Flat</option>
          <option>Garden</option>
          <option>Villa</option>
        </select>
      </div>
      <div className="input-div">
        <label htmlFor="b">City</label>
        <input type="text" id="b" />
      </div>
      <div className="input-div">
        <label htmlFor="c">Bedrooms</label>
        <input type="text" id="c" />
      </div>
      <div className="input-div">
        <span className="button-span">.</span>
        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;
