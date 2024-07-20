import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/vehicles/${id}/`);
        setVehicle(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching vehicle details:', error);
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  if (loading) {
   return <div className= 'vh-100 d-flex align-items-center justify-content-center'>Loading...</div>;
  }

  if (!vehicle) {
    return <div>Error loading vehicle details.</div>;
  }

  return (
    <div className="container  my-5 d-flex align-items-center">
      <div className="card  col-12 details-card">
      <div className="card-body ">
          <h2 className="card-title">{vehicle.name}</h2>
         
          {vehicle.model && <p className="card-text text-white ">Model: {vehicle.model}</p>}
          {vehicle.manufacturer && <p className="card-text text-white">Manufacturer: {vehicle.manufacturer}</p>}
          {vehicle.cost_in_credits && <p className="card-text text-white">Cost in Credits: {vehicle.cost_in_credits}</p>}
          {vehicle.length && <p className="card-text text-white">Length: {vehicle.length}</p>}
          {vehicle.max_atmosphering_speed && <p className="card-text text-white">Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>}
          {vehicle.crew && <p className="card-text text-white">Crew: {vehicle.crew}</p>}
          {vehicle.passengers && <p className="card-text text-white">Passengers: {vehicle.passengers}</p>}
          {vehicle.cargo_capacity && <p className="card-text text-white">Cargo Capacity: {vehicle.cargo_capacity}</p>}
          {vehicle.consumables && <p className="card-text text-white">Consumables: {vehicle.consumables}</p>}
          {vehicle.vehicle_class && <p className="card-text text-white">Vehicle Class: {vehicle.vehicle_class}</p>}
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
