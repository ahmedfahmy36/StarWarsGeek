import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SwapiComponent = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters data:', error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setLoading(true);
  };

  if (loading) {
    return <div className= 'vh-100 d-flex align-items-center justify-content-center'>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="py-5">Star Wars characters</h1>

      <div className="row">
        {characters.map((character, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-white bg-dark h-100">
            <Link to={`/people/${character.url.split('/').slice(-2, -1)[0]}`} className="btn btn-primary ">

              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <button to={`/people/${character.url.split('/').slice(-2, -1)[0]}`} className="btn btn-primary">
                  view Details
                </button>
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between">
        <button 
          className="btn btn-secondary" 
          disabled={currentPage === 1} 
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button 
          className="btn btn-secondary" 
          disabled={characters.length < 10} 
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SwapiComponent;
