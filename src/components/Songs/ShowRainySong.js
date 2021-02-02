import React from 'react'

 const getRandomSong = function() {
     return Math.floor(Math.random() * 60)
 }



const ShowRainySong = (props) => {
    // const random = Math.floor(Math.random() * 60)
    return (
        <div>
            {/* {console.log('return show song', props.responseSong.tracks?.items)} */}
            <div>

                {props.responseSong.tracks?.items
                .filter((song, indx) =>  getRandomSong(indx) === 1)
                .map((song) => {
                    return (
                        <div>
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