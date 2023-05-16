import React, { useState } from "react";
import IngredientImage from "./IngredientImage";
import "../Static/DrinkCard.css";

const getIngredientImageFileName = (name) => {
  const fileName = name.replace(/\s+/g, "_");
  return `./images/${fileName}.png`;
};

const IngredientCard = ({ ingredient, index }) => {
  const [show, setShow] = useState(true);

  return (
    <li key={index} onClick={() => setShow(!show)}>
      {show ? (
        <IngredientImage
          image={getIngredientImageFileName(ingredient.ingredient)}
        />
      ) : (
        "Click To Reveal"
      )}

      {ingredient.amount && show ? `${ingredient.amount}` : ""}
      {typeof ingredient.amount === typeof 1 && show ? "oz, " : " "}
      {ingredient.type ? `${ingredient.type} ` : " "}
      {ingredient.ingredient && show ? `${ingredient.ingredient} ` : ""}
    </li>
  );
};

export default IngredientCard;
