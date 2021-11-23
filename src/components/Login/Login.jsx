import React, { Component } from 'react'

import './component.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged : false,
            username : ""
        }
    }
    render() { 
        return <div className='login-container'>
            {
                this.state.isLogged ?
                <p>Inicia<span>sesión</span></p> :
                <p>Hola<span>{this.state.username}!</span></p>
            }
        </div>;
    }
}
 
export default Login;
