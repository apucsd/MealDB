import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <a href="#">
          {" "}
          <h1>MealDB</h1>
        </a>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Meals</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
