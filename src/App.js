import "./Static/App.css";
import React, { useState } from "react";

import DrinkCard from "./Components/DrinkCard";
import SearchBar from "./Components/SearchBar";

import DRINKS_DATA from "./Static/data.json";

const App = () => {
  const suggestions = DRINKS_DATA;
  const [selectedDrink, setSelectedDrink] = useState(null);

  return (
    <div className="App">
      <h1 className="page-title">Drink Search</h1>
      <SearchBar
        suggestions={suggestions}
        onSuggestionSelected={setSelectedDrink}
      />
      <DrinkCard drink={selectedDrink} />
      {/* {DRINKS_DATA.map((drink) => (
        <DrinkCard key={drink.id} drink={drink} />
      ))} */}
    </div>
  );
};

export default App;
