import React from 'react'

 const getRandomSong = function() {
     return [Math.floor(Math.random() * 60)]
 }



const ShowRainySong = (props) => {
    return (
        <div>
            <div>
                {props.responseSong.tracks?.items
                .filter(() =>  getRandomSong() === 1)
                .map((song) => {
                    return (
                        <div className=''>
                            <p key={song.track.href}>Artist: {song.track.artists[0].name}</p>
                            <p key={song.track.href}>Song: {song.track.name}</p>
                            <a key={song.track.href} href={song.track.uri}>link</a>
                        </div>
                    )
                })}
            </div>
        </div>
        
    )
}

export default ShowRainySong