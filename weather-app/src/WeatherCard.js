import React from 'react';

const styledCard = {
    
    textAlign: 'left',
    width: '60%',
    
}

const WeatherCard = props => {
    console.log('properties', props)
    return (
        <div style = {styledCard}>
           
           
           <p><strong>Last Update:</strong> {props.getWeather.last_updated}</p>
           <p><strong>Current Temperature:</strong> {props.getWeather.temp_f} F</p>
           <p><strong>Feels Like:</strong> {props.getWeather.feelslike_f} F</p>
           <p><strong>Current Precipitation:</strong> {props.getWeather.precip_in} in</p>

        </div>
    )
}

export default WeatherCard



