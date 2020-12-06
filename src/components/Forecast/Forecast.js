import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions'

const Forecast = () => {

    
   let [responseObj, setResponseObj] = useState({})
   let [city, setCity] = useState('')
   let [unit, setUnit] = useState('imperial')
   const uriEncodeCity = encodeURIComponent(city)
    

   function getForecast(event) {
       event.preventDefault()
    fetch(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?units=${unit}&q=${uriEncodeCity}&cnt=5`, {
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
    })
}

   return (
    <div>
        <h2>Get your 5 day forecast</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(event) => setUnit(event.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(event) => setUnit(event.target.value)}
                        />
                    Celcius
                </label>
                
                <button type="submit">Get Forecast</button>

            </form>
        <Conditions 
            responseObj={responseObj}
            />
    </div>
    )
}

export default Forecast