import React from 'react';




const loginAuth = AppPage => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        
         loggedIn: false,
           
      };
    }

    componentDidMount() {
      if (localStorage.getItem('zipcode')) {
          this.setState ({loggedIn: true});
      }else {
          this.setState ({loggedIn: false});
      }
  }
  
 handleLogOut = () =>{
  localStorage.removeItem('zipcode'); 
  this.setState({loggedIn: !this.state.loggedIn});
}
     
    render() {
      if (!this.state.loggedIn) return <Login  />;
      return <AppPage handleLogOut={this.handleLogOut} />;
    }
  };

export default loginAuth;