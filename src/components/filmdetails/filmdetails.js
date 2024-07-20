import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FilmDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
        setFilm(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching film details:', error);
        setLoading(false);
      }
    };

    fetchFilm();
  }, [id]);

  if (loading) {
    return <div className= 'vh-100 d-flex align-items-center justify-content-center'>Loading...</div>;
  }

  if (!film) {
    return <div>Error loading film details.</div>;
  }

  return (
    <div className="container  my-5 d-flex align-items-center">
      <div className="card  col-12 details-card">
      <div className="card-body ">
          <h2 className="card-title">{film.title}</h2>
          {film.episode_id && <p className="card-text text-white ">Episode: {film.episode_id}</p>}
          {film.opening_crawl && <p className="card-text text-white">Opening Crawl: {film.opening_crawl}</p>}
          {film.director && <p className="card-text text-white">Director: {film.director}</p>}
          {film.producer && <p className="card-text text-white">Producer: {film.producer}</p>}
          {film.release_date && <p className="card-text text-white">Release Date: {film.release_date}</p>}
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
