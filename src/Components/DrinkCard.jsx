import React, { useState } from 'react';
import styled from 'styled-components';
import IngredientImage from './IngredientImage';
import { FaCocktail } from 'react-icons/fa';
import '../Static/DrinkCard.css';
import IngredientCard from './IngredientCard';

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
//   padding: 24px;
//   margin: 16px;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
//   }
// `;

// const Title = styled.h2`
//   font-size: 32px;
//   font-weight: bold;
//   margin: 16px 0;
//   color: #333;
// `;

// const Subtitle = styled.h3`
//   font-size: 24px;
//   font-weight: bold;
//   margin: 16px 0;
//   color: #333;
// `;

// const List = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
//   gap: 16px;
// `;

// const ListItem = styled.li`
  // font-size: 18px;
  // margin: 8px 0;
  // display: flex;
  // align-items: center;
  // color: #555;
  // border-radius: 8px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  // padding: 8px;
// `;



// const DrinkCard = ({ drink }) => {
//   const { name, ingredients, glass, instructions } = drink;

//   const isInstructionsArray = Array.isArray(instructions);

//   return (
//     <Card>
//       <Title>{name}</Title>
//       <Subtitle>Ingredients</Subtitle>
//       <List>
//         {ingredients.map((ingredient, index) => (
//           <ListItem key={index}>
//             <IngredientImage image={getIngredientImageFileName(ingredient.ingredient)}/>
//             {/* {ingredient.amount ? `${ingredient.amount} ` : ''} */}
//             {/* {ingredient.unit ? `${ingredient.unit} ` : ''} */}
//             {/* {ingredient.ingredient} */}
//             {ingredient.type ? ` (${ingredient.type})` : ''}
//           </ListItem>
//         ))}
//       </List>
//       {isInstructionsArray && instructions.length > 0 && (
//         <>
//           <Subtitle>Instructions</Subtitle>
//           <List>
//             {instructions.map((instruction, index) => (
//               <ListItem key={index}>{instruction}</ListItem>
//             ))}
//           </List>
//         </>
//       )}
//       <Subtitle>Glass</Subtitle>
//       <p>{glass}</p>
//     </Card>
//   );
// };

// export default DrinkCard;



const DrinkCard = ({ drink }) => {
	if (!drink) return null;
	return (
    <div>
		<div className="drink-card-container">
		  <div className="drink-card">
			<h2>{drink.name}</h2>
			<p><strong>Glass:</strong> {drink.glass}</p>
			<h3>Ingredients</h3>
      <ul>
        {drink.ingredients.map((ingredient, index) => (
          <IngredientCard ingredient={ingredient} index={index} />
        ))}
      </ul>
		  </div>
      
      
		</div>
    <div class="line-break"></div>
    </div>
	  );
};

export default DrinkCard