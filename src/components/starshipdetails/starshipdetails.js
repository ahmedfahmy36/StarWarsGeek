import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StarshipDetails = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${id}/`);
        setStarship(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching starship details:', error);
        setLoading(false);
      }
    };

    fetchStarship();
  }, [id]);

  if (loading) {
   return <div className= 'vh-100 d-flex align-items-center justify-content-center'>Loading...</div>;
  }

  if (!starship) {
    return <div>Error loading starship details.</div>;
  }

  return (
    <div className="container  my-5 d-flex align-items-center">
         <div className="card col-12 details-card">
         <div className="card-body ">
          <h2 className="card-title">{starship.name}</h2>
        
          {starship.model && <p className="card-text text-white">Model: {starship.model}</p>}
          {starship.manufacturer && <p className="card-text text-white">Manufacturer: {starship.manufacturer}</p>}
          {starship.cost_in_credits && <p className="card-text text-white">Cost in Credits: {starship.cost_in_credits}</p>}
          {starship.length && <p className="card-text text-white">Length: {starship.length}</p>}
          {starship.max_atmosphering_speed && <p className="card-text text-white" >Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>}
          {starship.crew && <p className="card-text text-white">Crew: {starship.crew}</p>}
          {starship.passengers && <p className="card-text text-white">Passengers: {starship.passengers}</p>}
          {starship.cargo_capacity && <p className="card-text text-white">Cargo Capacity: {starship.cargo_capacity}</p>}
          {starship.consumables && <p className="card-text text-white">Consumables: {starship.consumables}</p>}
          {starship.hyperdrive_rating && <p className="card-text text-white">Hyperdrive Rating: {starship.hyperdrive_rating}</p>}
          {starship.MGLT && <p className="card-text text-white">MGLT: {starship.MGLT}</p>}
          {starship.starship_class && <p className="card-text text-white">Starship Class: {starship.starship_class}</p>}
        </div>
      </div>
    </div>
  );
};

export default StarshipDetails;
