import React from 'react';

const styledCard = {
    
    textAlign: 'center',
    width: '30%',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
}

const WeatherCard = props => {
    console.log('properties', props)
    return (
        <div style = {styledCard}>
           <p><strong>Last Update:</strong> {props.getWeather.last_updated}</p>
           <p>{props.getLocation.name}</p>
           <p>{props.getLocation.region}</p>
           <p>{props.getLocation.country}</p>
           <p><strong>Current Temperature:</strong> {props.getWeather.temp_f} F</p>
           <p><strong>Feels Like:</strong> {props.getWeather.feelslike_f} F</p>
           <p><strong>Current Precipitation:</strong> {props.getWeather.precip_in} in</p>

        </div>
    )
}

export default WeatherCard



