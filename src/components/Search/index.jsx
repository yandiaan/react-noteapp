import React from "react";
import "./search.style.css";

const Search = ({ keys, setKeys }) => {
  const handleSearch = (e) => {
    setKeys(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Cari Catatan"
        value={keys}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
