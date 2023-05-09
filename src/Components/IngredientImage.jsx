import React from "react";

const IngredientImage = ({image}) => {
  return (
    // JSX code goes here
    <div>
      <img
        src={image}
        style={{ width: "100px", height: "150px", objectFit: "scale-down" }}
        alt="not found"
      />
    </div>
  );
};

export default IngredientImage;
