import React from 'react';

const styledCard = {
    border: '1px solid black',
    textAlign: 'center'
}

const WeatherCard = props => {
    console.log('properties', props)
    return (
        <div style = {styledCard}>
           
           <p>{props.getLocation.name}</p>
           <p>{props.getLocation.region}</p>
           <p>{props.getLocation.country}</p>
           <p><strong>Current Temperature:</strong> {props.getWeather.temp_f} F</p>
           <p><strong>Feels Like:</strong> {props.getWeather.feelslike_f} F</p>
           <p><strong>Current Precipitation:</strong> {props.getWeather.precip_in} .in</p>

        </div>
    )
}

export default WeatherCard



