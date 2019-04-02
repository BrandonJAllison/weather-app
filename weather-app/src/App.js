import React, { Component } from 'react';
import Login from './Login'
import AppPage from './AppPage.js'
import loginAuth from './LoginAuth'



import './App.css';

const divStyle = {
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Heebo',
  background: 'black',
  color: 'white'
}


class App extends Component {
  constructor(){
    super()
    this.state = {
     
      isLoading: false   
     };
  }
  
  render(){
    
    return(
      <div style={divStyle}>

      <LoginAuth/>
        
      </div>
    )
  }
}

const LoginAuth = loginAuth(AppPage)(Login)

export default App;
