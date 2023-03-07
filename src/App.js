import "./static/App.css";
import React, { useState } from "react";
import DrinkCard from "./Components/DrinkCard";
import data from "./data/data-from-excel.json";
import SearchIcon from "@mui/icons-material/Search";

/** for filtering the drink card as the user types into the search bar*/
const getFilteredDrinks = (query, drinks) => {
	if (!query) {
		return [];
	}
	return drinks.filter((drink) => drink.name.toLowerCase().includes(query));
};

const App = () => {
	const [drinks, setDrinks] = useState(data);
	const [query, setQuery] = useState("");

	const filteredDrinks = getFilteredDrinks(query, drinks);

	return (
		<div className="App">
			<div className="container">
				<h1 className="heading">Drinks</h1>
				<div className="search-box">
					{/* <label>Filter</label> */}
					<input
						type="text"
						placeholder="Search"
						className="filter-bar"
						onChange={(e) => setQuery(e.target.value.toLowerCase())}
					/>
					<div className="search-icon">
						<SearchIcon />
					</div>
				</div>
				<div className="card-container">
					{filteredDrinks.map((drink) => (
						<DrinkCard drink={drink} />
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
