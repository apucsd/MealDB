import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import "./Main.css";

const Main = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  ///using a state for transfer data
  const [meal, setMeal] = useState({});
  ////get data from child-food
  const getDataFrom = (data) => {
    setMeal(data);
  };
  return (
    <div className="main-section">
      <div className="food-section">
        {meals.map((meal) => (
          <Food getDataFrom={getDataFrom} meal={meal} key={meal.idMeal}></Food>
        ))}
      </div>
      <div className="cart-section">
        <Cart meal={meal}></Cart>
      </div>
    </div>
  );
};

export default Main;
