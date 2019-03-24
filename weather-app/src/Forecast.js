import React, { Component } from 'react';
import ForecastList from './ForecastList'

const styleDiv = {
  display: 'flex',
  justifyContent: 'center',
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
    this.getForecast('http://api.apixu.com/v1/forecast.json?key=6865a0ce98c4410ca4f205844192303&q=04062&days=5')
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

      <div style={styleDiv}>

        
        <ForecastList getForecast = {this.state.getForecast} />
        
        
      </div>
    )
  }
}




export default Forecast