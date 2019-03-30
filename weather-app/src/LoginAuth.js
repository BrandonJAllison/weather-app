import React from 'react';




const loginAuth = AppPage => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        
         loggedIn: false,
           
      };
    }
     
    render() {
      if (!this.state.loggedIn) return <Login  />;
      return <AppPage />;
    }
  };

export default loginAuth;