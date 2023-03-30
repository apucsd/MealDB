import React from "react";
import "./Food.css";

const Food = ({ idMeal, strMeal, strMealThumb, strInstructions }) => {
  return (
    <div className="food-cart">
      <img src={strMealThumb} alt="" />
      <h4>{strMeal}</h4>
    </div>
  );
};

export default Food;
