import React from "react";
import "./Food.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Food = (props) => {
  //   console.log(props);
  const { idMeal, strMeal, strMealThumb, strCategory, strInstructions } =
    props.meal;
  const getDataFrom = props.getDataFrom;
  return (
    <div className="food-cart">
      <img src={strMealThumb} alt="" />
      <h4>{strMeal}</h4>
      <hr />
      <div style={{ color: "Gray" }}>
        <p>
          <small>Category: {strCategory}</small>
        </p>
      </div>
      <div className="btn-div">
        <button
          onClick={() => getDataFrom(props.meal)}
          className="btn-add-to-cart"
        >
          Add To Cart{" "}
          <span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Food;
