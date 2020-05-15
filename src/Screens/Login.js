import React, { Component } from 'react'
import Doc from "../Images/doc.png";
import Button from '@material-ui/core/Button';
import { positions } from '@material-ui/system';
class Login extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <img src={Doc} alt="doc" />
        </div>
        <h1 style= {{color:'#bbded6'}}> Login as</h1>
        <a href="LoginDr">
          <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}>Doctor</Button>
        </a>
        <br /><br />
        <a href="LoginHl">
          <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}}>Hospital</Button>
        </a>
        <h3 style= {{color:'#bbded6'}} > Don't have an account?</h3>
        <a href="SignUp">
        <Button variant="outlined" style={{color : 'white', backgroundColor : '#e1ccec'}} r={1200} >Click me!</Button>
        </a>
      </div>
    );
  }
}
const theme = {
  spacing: 8,
}
export default Login;