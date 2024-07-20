import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Species = () => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/species/?page=${currentPage}`
        );
        setSpecies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching species data:", error);
        setLoading(false);
      }
    };

    fetchSpecies();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setLoading(true);
  };

  if (loading) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="py-5">Star Wars species</h1>
      <div className="row">
        {species.map((specie, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-white bg-dark h-100">
            <Link to={`/species/${specie.url.split("/").slice(-2, -1)[0]}`}className="btn btn-primary h-100" >

              <div className="card-body">
                <h5 className="card-title">{specie.name}</h5>
                <button to={`/species/${specie.url.split("/").slice(-2, -1)[0]}`}className="btn btn-primary" >
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
          disabled={species.length < 10}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Species;
