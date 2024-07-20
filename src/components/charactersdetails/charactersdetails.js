 import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [homeworld, setHomeworld] = useState('');
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]); 
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        const charData = response.data;
        setCharacter(charData);

        
        // Fetch homeworld
        if (charData.homeworld) {
          const homeworldResponse = await axios.get(charData.homeworld);
          setHomeworld(homeworldResponse.data.name);
        }

        if (charData.films.length > 0) {
          const filmPromises = charData.films.map((url) => axios.get(url));
          const filmResponses = await Promise.all(filmPromises);
          setFilms(filmResponses.map((film) => film.data.title));
        }

        if (charData.species.length > 0) {
          const speciesPromises = charData.species.map((url) => axios.get(url));
          const speciesResponses = await Promise.all(speciesPromises);
          setSpecies(speciesResponses.map((species) => species.data.name));
        }

        if (charData.vehicles.length > 0) {
          const vehiclePromises = charData.vehicles.map((url) => axios.get(url));
          const vehicleResponses = await Promise.all(vehiclePromises);
          setVehicles(vehicleResponses.map((vehicle) => vehicle.data.name));
        }

        if (charData.starships.length > 0) {
          const starshipPromises = charData.starships.map((url) => axios.get(url));
          const starshipResponses = await Promise.all(starshipPromises);
          setStarships(starshipResponses.map((starship) => starship.data.name));
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching character details:', error);
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return  <div className='vh-100 d-flex align-items-center justify-content-center'>
      Loading...
      </div>;
  }

  if (!character) {
    return <div>Error loading character details.</div>;
  }

  return (
    <div className="container  my-5 d-flex align-items-center">
      <div className="card  col-12 details-card">
        <div className="card-body ">
          <h2 className="card-title py-2">{character.name}</h2>
        
          {character.height && <p className="card-text text-white">Height: {character.height} cm</p>}
          {character.mass && <p className="card-text text-white">Mass: {character.mass} kg</p>}
          {character.hair_color && <p className="card-text text-white">Hair Color: {character.hair_color}</p>}
          {character.skin_color && <p className="card-text text-white">Skin Color: {character.skin_color}</p>}
          {character.eye_color && <p className="card-text text-white">Eye Color: {character.eye_color}</p>}
          {character.birth_year && <p className="card-text text-white">Birth Year: {character.birth_year}</p>}
          {character.gender && <p className="card-text text-white">Gender: {character.gender}</p>}
          {homeworld && <p className="card-text text-white">Homeworld: {homeworld}</p>}
          {films.length > 0 && <p className="card-text text-white">Films: {films.join(', ')}</p>}
          {species.length > 0 && <p className="card-text text-white">Species: {species.join(', ')}</p>}
          {vehicles.length > 0 && <p className="card-text text-white">Vehicles: {vehicles.join(', ')}</p>}
          {starships.length > 0 && <p className="card-text text-white">Starships: {starships.join(', ')}</p>}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;

