import React, {useEffect, useState} from 'react';
import PlanetsDb from '../../db';
import Planet from '../../components/Planet';
import './style.scss';

export const Content = (props) => {


    const [planets, setPlanets] = useState([]);
    
    const openPlanetSettings = (planetId) => {
        props.openSettingsModal(planetId);
    }
    
    useEffect(()=> {
        const planets = PlanetsDb.getPlanets();
        setPlanets(planets);
    });

    return (
        <div className='content'>
            {planets.map((planet, index) => {
                return <Planet planet={planet} key={index} handlePlanetClick={openPlanetSettings}/>
            })}
        </div>
    );
}
export default Content;