import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SpeciesDetails = () => {
  const { id } = useParams();
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/species/${id}/`);
        setSpecies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching species details:', error);
        setLoading(false);
      }
    };

    fetchSpecies();
  }, [id]);

  if (loading) {
   return <div className= 'vh-100 d-flex align-items-center justify-content-center'>Loading...</div>;
  }

  if (!species) {
    return <div>Error loading species details.</div>;
  }

  return (
    <div className="container  my-5 d-flex align-items-center">
       <div className="card col-12 details-card">
       <div className="card-body ">
          <h2 className="card-title">{species.name}</h2>
          
          {species.classification && <p className="card-text text-white ">Classification: {species.classification}</p>}
          {species.designation && <p className="card-text text-white">Designation: {species.designation}</p>}
          {species.average_height && <p className="card-text text-white">Average Height: {species.average_height}</p>}
          {species.skin_colors && <p className="card-text text-white">Skin Colors: {species.skin_colors}</p>}
          {species.hair_colors && <p className="card-text text-white">Hair Colors: {species.hair_colors}</p>}
          {species.eye_colors && <p className="card-text text-white">Eye Colors: {species.eye_colors}</p>}
          {species.average_lifespan && <p className="card-text text-white">Average Lifespan: {species.average_lifespan}</p>}
          {species.language && <p className="card-text text-white">Language: {species.language}</p>}
        </div>
      </div>
    </div>
  );
};

export default SpeciesDetails;
