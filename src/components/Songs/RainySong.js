import React, { useState } from 'react'
import queryString from 'query-string'
import ShowRainySong from '../Songs/ShowRainySong'

const RainySong = () => {
    
    let [responseSong, setResponseSong] = useState({})
    let parsed = queryString.parse(window.location.search)
    let accessToken = parsed.access_token
    console.log('token',accessToken)

    function getRainySong(event) {
        event.preventDefault()
        fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DXbvABJXBIyiY/tracks?fields=items(track(name,href,artists(name,href)))", {
                "headers": { 'Authorization': 'Bearer ' + accessToken }
            })
                .then(response => response.json())
                .then(response => {
                    setResponseSong(response)
                })
                .catch(err => {
                    console.error(err)
                })
    }
    console.log('song', responseSong.items)
    return (
        <div>
            <button onClick={getRainySong}>Get Song</button>
            <ShowRainySong
            responseSong={responseSong}
            />
        </div>
           
    )
}

export default RainySong