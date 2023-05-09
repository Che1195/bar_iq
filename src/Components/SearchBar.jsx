import React, { useState, useEffect, useRef } from 'react';
import "../Static/SearchBar.css";

const SearchBar = ({ suggestions, onSuggestionSelected }) => {
  const [search, setSearch] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const filterSuggestions = () => {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    };

    filterSuggestions();
  }, [search, suggestions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setHideSuggestions(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    setHideSuggestions(!inputValue);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch("");
    setFilteredSuggestions([]);
    onSuggestionSelected(suggestion);
    setHideSuggestions(true);
  };

  return (
    <div className="search-bar" ref={searchBarRef}>
    
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {!hideSuggestions && (
        <ul className="suggestion-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
