import React from 'react'
import moment from 'moment'


const conditions = (props) => {
    console.log('props are ', props)
        return (
            <div>
                {props.responseObj.cod === "200" ?
                    <div>
                        <h1>{props.responseObj.city.name}</h1>
                        <p>{moment(props.responseObj.list[0].dt.txt).format('DD-MM-YYYY')}</p>
                        <p>{Math.round(props.responseObj.list[0].temp.day)} Degrees during the day</p>
                        <p>{Math.round(props.responseObj.list[0].temp.night)} Degrees at night</p>
                    </div>
                 : null
                }   
            </div>
        )
    }

export default conditions