import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions'
import queryString from 'query-string'

const Forecast = () => {

    
   let [responseObj, setResponseObj] = useState({})
   let [city, setCity] = useState('')
   let [unit, setUnit] = useState('imperial')
   let [responseSong, setResponseSong] = useState({})
   const uriEncodeCity = encodeURIComponent(city)
    
    let parsed = queryString.parse(window.location.search)
    let accessToken = parsed.access_token
    console.log(accessToken)

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
    fetch("https://api.spotify.com/v1/recommendations?seed_artists=1G9G7WwrXka3Z1r7aIDjI7&seed_artists=2SfO2W7dVwEov6TpQW2uOg&seed_artists=6zvul52xwTWzilBZl6BUbT&seed_tracks=6b2oQwSGFkzsMtQruIWm2p&seed_genre=dance&market=US&danceability=0.0&valence=0.0&mode=1", {
        "headers": { 'Authorization': 'Bearer ' + accessToken }
    })
        .then(response => response.json())
        .then(response => {
            setResponseSong(response)
        })
   }

//    function getSong(event) {
//        event.preventDefault()
//     fetch("https://api.spotify.com/v1/genre", {
//         "headers": { 'Authorization': 'Bearer ' + accessToken }
//     })
//         .then(response => response.json())
//         .then(response => {
//             setResponseSong(response)
//         })
//    }

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
            responseSong={responseSong}
            />
    </div>
    )
}

export default Forecast;