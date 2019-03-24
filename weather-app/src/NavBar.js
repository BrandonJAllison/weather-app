import React from 'react'

const styleDiv = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', 
    background: '#001630',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    paddingLeft: '20px'
   
}

const styleInput = {
    height: '20px',
    margin: '20px',
    borderRadius: '10px',
    border: 'none',
    textAlign: 'right',
    paddingRight: '10px'
}

const styleBtn = {

    background: 'transparent',
    color: 'white',
    border:'none',
    fontSize: '20px'

}

const links = {
    float: 'right',
    marginLeft: '30px',
    textDecoration: 'underline'

    
}

const NavBar = props => {
    return (
    
    <div style = {styleDiv}>
        <p>Please Enter Your Zip Code</p>
       <input style = {styleInput} 
       
        type="text"
        name="search"
        
        placeholder= "...zip code"/>

        <button style ={styleBtn} type="submit"><i className="fa fa-search"></i></button>
        <p style= {links}>About</p>
    </div>

    )
    

};




export default NavBar