import React from 'react';
import {  Route, Routes,   } from 'react-router-dom';
import './App.css';
import SwapiComponent from './components/Characters/Characters';
import CharacterDetails from './components/charactersdetails/charactersdetails';
import Homepage from './components/homepage/homepage';
import Planets from './components/planets/planets';
import PlanetDetails from './components/planetdetails/planetdetails';
import Films from './components/films/films';
import FilmDetails from './components/filmdetails/filmdetails';
import Vehicles from './components/vehicles/vehicles';
import VehicleDetails from './components/vehicledetails/vehicledetails';
import Species from './components/species/species';
import SpeciesDetails from './components/speciedetails/speciedetails';
import Starships from './components/starships/starships';
import StarshipDetails from './components/starshipdetails/starshipdetails';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Homepage/>} />
            <Route path="/people" element={<SwapiComponent />} />
            <Route path="/people/:id" element={<CharacterDetails />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<PlanetDetails />} /> 
            <Route path="/films" element={<Films />} /> 
            <Route path="/films/:id" element={<FilmDetails />} /> 
            <Route path="/vehicles" element={<Vehicles />} /> 
            <Route path="/vehicles/:id" element={<VehicleDetails />} /> 
            <Route path="/species" element={<Species />} /> 
            <Route path="/species/:id" element={<SpeciesDetails />} /> 
            <Route path="/starships" element={<Starships />} /> 
            <Route path="/starships/:id" element={<StarshipDetails />} /> 

            </Routes>
        </main>
        <Footer />
      </div>
  );
}
export default App;
