import React, {Component} from 'react';
import WeatherCard from './WeatherCard';
import Forecast from './Forecast';
import NavBar from './NavBar';





const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Heebo',
    width: '100%'
  }

class AppPage extends Component {
    constructor(props){
        super(props)
        this.state = {

            getWeather: [],
            getLocation: [],
            

        }
    }
    
    componentDidMount(){
        this.getWeather('https://api.apixu.com/v1/current.json?key=6865a0ce98c4410ca4f205844192303&q=' +localStorage.getItem('zipcode'))
      
      
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
    
      change= event => this.setState(
        { [event.target.name]: event.target.value});
    
    
      submit = zip => {
    
        const zipcode = {zip};
        console.log(zipcode)
    
       
      };

    
    render(){
        return(
          
            <div style={divStyle}>
            
            <NavBar handleSubmit={this.submit} handleChange={this.change} />
            <button onClick={this.props.handleLogOut}>Log Out</button>
            <h1>Let's Take A Look at The Forecast for {this.state.getLocation.name}</h1>
            <WeatherCard getWeather={this.state.getWeather} getLocation={this.state.getLocation} />
            <div>
            <Forecast />
            </div>
            </div>
        )
        }
    }

export default AppPage