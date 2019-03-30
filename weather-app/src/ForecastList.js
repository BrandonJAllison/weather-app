import React from 'react';
import ForecastCard from './ForecastCard';

const flex ={
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
    
}

const ForecastList = (props) => {
    console.log('forecastprops1', props);
    return (
        <div style={flex}>
            {props.getForecast.map((data) => {

                return(
                    
                    <ForecastCard   data={data}  />
                ) 
                
            })
            }
        </div>
    )
}


export default ForecastList;