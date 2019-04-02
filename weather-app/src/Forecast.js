import React, { Component } from 'react';
import ForecastList from './ForecastList'

const width = {
  marginTop: '25px',
  width: '100%'
  
}



class Forecast extends Component {
  constructor(){
    super()
    this.state = {
      getForecast: [],
      isLoading: false   
     };
  }

componentDidMount(){
    this.getForecast('https://api.apixu.com/v1/forecast.json?key=c8ef876b49794b9c9ad163113193103&q=&days=5&q=' +localStorage.getItem('zipcode'))
  }

  

  getForecast = URL => {

    fetch(URL)
    .then(response => {
      
      return response.json();
    })
      .then(data => {
        console.log('forecast1', data.forecast);
        this.setState({ 

          getForecast: data.forecast.forecastday
         
           });
      })
      .catch(err => {
        throw new Error(err);
      });

  };

 

  render(){
    
    return(

      <div style={width}>

        
        <ForecastList  getForecast = {this.state.getForecast} />
        
        
      </div>
    )
  }
}




export default Forecast