import React from "react";
import { useState } from "react";
import "./styles.css";
import { CiSearch } from "react-icons/ci";

export const AppInput = () => {
  const [val, setVal] = useState("");

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
      <div className="search-container">
        <CiSearch className="search-icon" color="#8e8e8e" />
        <input
          type="text"
          placeholder="Search..."
          value={val}
          onChange={handleChange}
          className="search-input"
        />
      </div>
    
  );
};
