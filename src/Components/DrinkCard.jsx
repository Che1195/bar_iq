import React from "react";
import "../Static/DrinkCard.css";
import IngredientCard from "./IngredientCard";

const DrinkCard = ({ drink }) => {
  if (!drink) return null;
  return (
    <div>
      <div className="drink-card-container">
        <div className="drink-card">
          <h2>{drink.name}</h2>
          <p>
            <strong>Glass:</strong> {drink.glass}
          </p>
          {/* display ingredients with pictures */}
          <h3>Ingredients</h3>
          <ul>
            {drink.ingredients.map((ingredient, index) => (
              <IngredientCard ingredient={ingredient} index={index} />
            ))}
          </ul>
          {/* display Instructions if they exist */}
          {Array.isArray(drink.instructions) ? (
            <div>
              <h3>Instructions</h3>
              <ul>
                {drink.instructions.map((step) => (
                  <li>{step}</li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div class="line-break"></div>
    </div>
  );
};

export default DrinkCard;
