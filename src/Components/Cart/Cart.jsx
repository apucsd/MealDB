import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { strMeal, strMealThumb } = props.meal;
  //   console.log(props);
  return (
    <div>
      {props.meal ? (
        <div className="cart">
          <h1>Order Summary</h1>
          <h2>Name: {strMeal}</h2>
          <img src={strMealThumb} alt="" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
