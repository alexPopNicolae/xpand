import React, { useEffect } from 'react';
import Earth from '../../img/earth.png';
import * as planetStatus from '../../helpers/planetStatus';
import { getStatusColor } from '../../helpers/getStatusColor';
import SettingsIcon from '../../svgIcons/Settings';
import './style.scss';

const Planet = (props) => {
    const isVisitedPlanet = props.planet.status !== planetStatus.STATUS_EN_ROUTE ? true : false;
    const statusColor = getStatusColor(props.planet.status);
    return (
        <div className='planet'>
             <div className='settings-container' onClick={ () => {props.handlePlanetClick(props.planet.planetId)}}>
                    <SettingsIcon />
                </div>
            <div className='planet-info'>
                <div className='image-container'>
                    <img src={Earth} />
                </div>
                <div className='planet-name'>{props.planet.name}</div>
            </div>
            <div className='captain-data'>
                <div className='description'>{props.planet.description}</div>
                {
                    isVisitedPlanet ?
                        <div className='captain-info'>
                            <div>
                                <span className='by-captain'>by captain</span>
                                <span>{props.planet.captain}</span>
                            </div>
                            <div>
                                <span className='robots'>robots:</span><span>T1, T2</span>
                            </div>
                        </div>
                        : null
                }
            </div>
            <div className='status'>
                <div className='status-wrapper' style={statusColor}>{props.planet.status}</div>
            </div>
        </div>
    );
}

export default Planet;
