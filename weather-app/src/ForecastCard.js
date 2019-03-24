import React from 'react';


const styledCard = {
    
    textAlign: 'center',
    width: '200px',
    height: '200px',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    
}

const flex ={
    display: 'flex'
}

const ForecastCard = props => {

    
    
    console.log('properties2', props.data.day)
    return (
        <div style={flex}>
        <div>
            <div style = {styledCard}>
            <p>{props.data.date}</p>
            <p>{props.data.day.condition.text}</p>
            <p><img src={props.data.day.condition.icon} alt="weather icon"></img></p>
            <p>{props.data.day.maxtemp_f}F / {props.data.day.mintemp_f}F</p>
            <p></p>
            <p></p>
            </div>
        </div>
        </div>
    )
}

export default ForecastCard