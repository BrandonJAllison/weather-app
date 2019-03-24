import React from 'react';
import ForecastCard from './ForecastCard';



const ForecastList = (props) => {
    console.log('forecastprops1', props);
    return (
        <div>
            {props.getForecast.map((data) => {

               
                
                return(
                    
                    <ForecastCard  data={data}  />
                ) 
                
                
            })
            }
        </div>
    )
}


export default ForecastList;