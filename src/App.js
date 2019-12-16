import React, { useState, useEffect } from 'react';
import Header from './shared/Header';
import Content from './shared/Content';
import PlanetsDb from './db';
import './App.scss';

function App() {

  const [planets, setPlanets] = useState([]);
  const [settingsModalOpen, setSettingsModal] = useState(false);
  const [planetName, setPlanetName] = useState('');
  const [planetDescription, setPlanetDescription] = useState('');
  const [planetStatus, setPlanetStatus] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState({});

  const getDataForPlanet = (planetId) => {
      return planets.find( planet => planet.planetId == planetId);
  }

  const openSettingsModal = (planetId) => {
      const planet = getDataForPlanet(planetId);
      setSelectedPlanet({...planet});
      setPlanetName(planet.name);
      setPlanetDescription(planet.description);
      setPlanetStatus(planet.status);
      setSettingsModal(true);
  }

  const closeSettingsModal = () => {
    setSettingsModal(false);
  }

  const savePlanetData = () => {
    selectedPlanet.description = planetDescription;
    selectedPlanet.status = planetStatus;
    console.log(selectedPlanet);
    PlanetsDb.updatePlanet(selectedPlanet);
    setSelectedPlanet({});
    setSettingsModal(false);
  }

  const handleStatusChange = (e) => {
    setPlanetStatus(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setPlanetDescription(e.target.value);
  }

  useEffect(()=> {
    const planets = PlanetsDb.getPlanets();
    console.log(PlanetsDb.getPlanets());
    setPlanets(planets);
  })

  return (
    <div className='xpand-app'>
      <Header />
      <Content openSettingsModal={openSettingsModal} />
      {settingsModalOpen && <div className='modal'>
        <h1>{planetName}</h1>
        <div>Description:</div>
        <textarea value={planetDescription} onChange={handleDescriptionChange}></textarea>
        <div>Status</div>
        <div>{selectedPlanet.status}</div>
        <div>Select a new status: </div>
        <select onChange={handleStatusChange}>
          <option value="" selected disabled hidden>Chose status here</option>
          <option value={'OK'}>OK</option>
          <option value={'!OK'}>!OK</option>
          <option value={'En route'}>En route</option>
        </select>
        <div className='buttons'>
          <button onClick={closeSettingsModal}>Cancel</button>
          <button onClick={savePlanetData}>Save</button>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
