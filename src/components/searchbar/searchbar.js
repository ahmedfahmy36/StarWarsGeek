import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const endpoints = ['people', 'planets', 'films', 'species', 'vehicles', 'starships'];
      const promises = endpoints.map((endpoint) => axios.get(`https://swapi.dev/api/${endpoint}/?search=${value}`));
      const responses = await Promise.all(promises);

      const combinedResults = responses.flatMap((response, index) => 
        response.data.results.map(item => ({ ...item, type: endpoints[index] }))
      );

      setSuggestions(combinedResults);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item) => {
    const id = item.url.split('/').slice(-2, -1)[0];
    navigate(`/${item.type}/${id}`);
    setQuery('');
    setSuggestions([]);
    setShowHistory(false);
    updateSearchHistory(item.name || item.title);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.length > 2 && suggestions.length === 0) {
      const endpoints = ['people', 'planets', 'films', 'species', 'vehicles', 'starships'];
      const promises = endpoints.map((endpoint) => axios.get(`https://swapi.dev/api/${endpoint}/?search=${query}`));
      const responses = await Promise.all(promises);

      const combinedResults = responses.flatMap((response, index) => 
        response.data.results.map(item => ({ ...item, type: endpoints[index] }))
      );

      if (combinedResults.length > 0) {
        handleSelect(combinedResults[0]);
      }
    } else if (suggestions.length > 0) {
      handleSelect(suggestions[0]);
    }
  };

  const updateSearchHistory = (searchQuery) => {
    const updatedHistory = [searchQuery, ...searchHistory.filter(item => item !== searchQuery)].slice(0, 5);
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className="search-bar mx-auto col-md-6 col-12">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for the force in you...."
            value={query}
            onChange={handleInputChange}
            onFocus={() => setShowHistory(true)}
            onBlur={() => setTimeout(() => setShowHistory(false), 200)}
          />
          <button type="submit" className="btn btn-outline-secondary">
            Search
          </button>
        </div>
        {showHistory && query === '' && searchHistory.length > 0 && (
          <ul className={`list-group search-history ${showHistory ? '' : 'search-history-hidden'}`}>
            <li className="list-group-item list-group-item-secondary">Recent Searches:</li>
            {searchHistory.map((item, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-action"
                onClick={() => setQuery(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <ul className="list-group">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(item)}
            >
              {item.name || item.title}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default SearchBar;
