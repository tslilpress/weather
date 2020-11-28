import React from 'react'
import moment from 'moment'

const Conditions = (props) => {
    
    const formatDate = function (date) {
        return moment.utc(date).format('dddd')
    }
    

    console.log('props are ', props)
        
   
        return (
            <div>
                {props.responseObj.cod === "200" ?
                    <div>
                        <h1>{props.responseObj.city.name}</h1>
                        {props.responseObj.list.map(index => {
                        return ( 
                            <div className="dayCard">
                                <h3>{formatDate(index.dt * 1000)}</h3>
                                <h5>{Math.round(index.temp.day)}°/{Math.round(index.temp.night)}°</h5>
                                <p>{index.weather[0].description}</p>
                                <img src={`http://openweathermap.org/img/w/${index.weather[0].icon}.png`} alt="condition-icon"/>
                            </div>
                        )})}
                    </div>
                 : null
                }   
            </div>
        )
    }

export default Conditions