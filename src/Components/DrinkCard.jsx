import "../static/DrinkCard.css";

const DrinkCard = ({ drink }) => {
	const { name, method, glass, garnish, ingredients, steps, options } = drink;
	return (
		<div className="card-container">
			<div className="card">
				<h1 className="name">{name}</h1>
				<h3 className="config">
					{method} | {glass} | {garnish}{" "}
				</h3>
				<h4 className="ingredients-title">Ingredients</h4>
				{ingredients.map((ingredient) => (
					<p className="ingredients-text">
						{ingredient.amount} {ingredient.name}
					</p>
				))}
				<h4 className="steps-title">Steps</h4>
				<ol>
					{steps.map((step) => (
						<li className="steps-text">{step}</li>
					))}
				</ol>
				{options ? <h4 className="steps-title">Options</h4> : null}
				<ol>
					{options
						? options.map((option) => <li className="steps-text">{option}</li>)
						: null}
				</ol>
			</div>
		</div>
	);
};

export default DrinkCard;
