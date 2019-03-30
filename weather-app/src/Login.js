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

    render(){
        return(
            <div style={loginDiv}>
            <div style={formDiv} >
            <form onSubmit={this.props.handleLogin}>
                   
                    <h2>Please Enter Your ZipCode</h2>
                    <input 
                            type='text'
                            name='username'
                            placeholer='Username'
                            required="required"
                            value={this.state.username}
                            onChange={this.handleChange}
                    />
                 
                    <button> Get Weather </button>
                </form>
                
            </div>
            </div>
        )
    }
}



export default Login