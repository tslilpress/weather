import React from 'react'

const conditions = (props) => {
    console.log('props are ', props)
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <h1>{props.responseObj.name}</h1>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}

export default conditions