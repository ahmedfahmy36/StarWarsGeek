import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PlanetDetails = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
        setPlanet(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching planet details:', error);
        setLoading(false);
      }
    };

    fetchPlanet();
  }, [id]);

  if (loading) {
    return <div className= 'vh-100 d-flex align-items-center justify-content-center'>Loading...</div>;
  }

  if (!planet) {
    return <div>Error loading planet details.</div>;
  }

  return (
    <div className="container  my-5 d-flex align-items-center">
      <div className="card  col-12 details-card">
      <div className="card-body ">
          <h2 className="card-title">{planet.name}</h2>
          
          {planet.rotation_period && <p className="card-text text-white  ">Rotation Period: {planet.rotation_period}</p>}
          {planet.orbital_period && <p className="card-text text-white">Orbital Period: {planet.orbital_period}</p>}
          {planet.diameter && <p className="card-text text-white">Diameter: {planet.diameter}</p>}
          {planet.climate && <p className="card-text text-white">Climate: {planet.climate}</p>}
          {planet.gravity && <p className="card-text text-white">Gravity: {planet.gravity}</p>}
          {planet.terrain && <p className="card-text text-white">Terrain: {planet.terrain}</p>}
          {planet.surface_water && <p className="card-text text-white">Surface Water: {planet.surface_water}</p>}
          {planet.population && <p className="card-text text-white">Population: {planet.population}</p>}
        </div>
      </div>
    </div>
  );
};

export default PlanetDetails;
