import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        setFilms(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching films data:', error);
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  if (loading) {
    return <div className= 'vh-100 d-flex align-items-center justify-content-center'>Loading...</div>;
  }

  return (
    <div className="container mt-5">
            <h1 className="py-5">Star Wars Films</h1>

      <div className="row">
        {films.map((film, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-white bg-dark h-100">
            <Link to={`/films/${film.url.split('/').slice(-2, -1)[0]}`} className="btn btn-primary h-100">

              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <button to={`/films/${film.url.split('/').slice(-2, -1)[0]}`} className="btn btn-primary">
                  view Details
                </button>
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
