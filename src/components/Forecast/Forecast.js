import React, { useState } from 'react';

const Forecast = () => {

    
   let [responseObj, setResponseObj] = useState({});

   function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "3d1c8ca844mshaf005065fa525fcp1dc08djsnde222bc65b4d",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    
    .then(response => {
           setResponseObj(response)
       })
    .catch(err => {
        console.error(err)
    });
   }

   return (
    <div>
        <h2>Find Current Weather Conditions</h2>
        <div>
            {JSON.stringify(responseObj)}
        </div>
        <button onClick={getForecast}>Get Forecast</button>
    </div>
    )
}

export default Forecast;