import React, { Component } from 'react';
import WeatherCard from './WeatherCard';
import Forecast from './Forecast';


import './App.css';

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Shadows Into Light'
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      getWeather: [],
      getLocation: [],
      isLoading: false   
     };
  }
  componentDidMount(){
    this.getWeather('http://api.apixu.com/v1/current.json?key=6865a0ce98c4410ca4f205844192303&q=04062')
  }

  getWeather = URL => {

    fetch(URL)
    .then(response => {
      
      return response.json();
    })
      .then(data => {
        console.log(data);
        this.setState({ 

          getWeather: data.current,
          getLocation: data.location
           });
      })
      .catch(err => {
        throw new Error(err);
      });

  };

 
  

  render(){
    
    return(
      <div style={divStyle}>
        <h1>Let's Take A Look at That Forecast</h1>
        <WeatherCard getWeather={this.state.getWeather} getLocation={this.state.getLocation} />
        <Forecast />
        
      </div>
    )
  }
}



export default App;
