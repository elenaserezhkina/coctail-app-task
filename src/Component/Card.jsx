import React from "react";
import "./Card.scss";

function Card({ cardTitle }) {
  return (
    <div className="card-container">
      <div className="CardBackground">
        <h3>{cardTitle}</h3>
        <p>Ingredients</p>
        <div className="mainIngredients">
          <div className="buttonIngredient">
            <h4>Water</h4>
          </div>
          <div className="buttonIngredient">
            <h4>Booze</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
