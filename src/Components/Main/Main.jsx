import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import "./Main.css";

const Main = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  console.log(meals);
  return (
    <div className="main-section">
      <div className="food-section">
        {meals.map((meal) => (
          <Food {...meal} key={meal.idMeal}></Food>
        ))}
      </div>
      <div className="cart-section">this is cart secion</div>
    </div>
  );
};

export default Main;
