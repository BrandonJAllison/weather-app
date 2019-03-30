import React, {Component} from 'react'

const loginDiv = {
   
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Shadows Into Light',
   
}
const formDiv ={
    background: ' #001630',
    color: 'white',
    border: '2px solid white',
    borderRadius: '15px',
    padding: '30px',
    boxShadow:'3px 3px 5px 6px gray'  
}

class Login extends Component {
    constructor(){
        super()
        this.state={
            zip: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      handleLogin = event => {
        
        const zipcode = this.state.zip;
        localStorage.setItem('zipcode', zipcode);
        
        
      };

    render(){
        return(
            <div style={loginDiv}>
            <div style={formDiv} >
            <form onSubmit={this.props.handleLogin}>
                   
                    <h2>Please Enter Your ZipCode</h2>
                    <input 
                            type='numbers'
                            name='zip'
                            placeholer='Zipcode'
                            required="required"
                            value={this.state.zip}
                            onChange={this.handleChange}
                    />
                 
                    <button onClick={this.handleLogin}> Get Weather </button>
                </form>
                
            </div>
            </div>
        )
    }
}



export default Login