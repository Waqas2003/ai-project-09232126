import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PowerPlants() {
    const [powerPlants, setPowerPlants] = useState([]);

    useEffect(() => {
        axios.get('https://api.pap.com/power-plants')
            .then(response => {
                setPowerPlants(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h1>Power Plants</h1>
            <ul>
                {powerPlants.map(powerPlant => (
                    <li key={powerPlant.id}>{powerPlant.name} ({powerPlant.capacity} MW)</li>
                ))}
            </ul>
        </div>
    );
}

export default PowerPlants;