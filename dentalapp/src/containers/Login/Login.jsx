import React from 'react';
import login from '../../services/redux/actions.js';

import './Login.css';
import logo from '../../img/logo.jpg';

class Login extends React.Component {
    constructor(props){
        super (props)

        this.state = {
            errorLogin: ""
        }
    };

    onSubmit = (event) =>{
        this.setState({errorLogin:""});

        event.preventDefault();
        const credentials ={
            email: event.target.email.value,
            password: event.target.password.value
        }
        login(credentials)
        .then(() => {
            this.props.history.push('/appointment');
        })
        .catch(() => {
            this.setState({errorLogin: 'Revise el email o la contraseña.'});
        })
    }

    register = () =>{
        this.props.history.push('/register');
    }

    landing = () =>{
        this.props.history.push('/');
    }

    render(){
        return(
            <div id="loginContainer">
                <div id="loginWindow"> 
                    <div id="loginwindowHeader">
                        <img id="loginLogoImage" src={logo} alt="Imagen del logo" onClick={this.landing} />
                    </div>
                    <h2 id="loginH2">Pide cita sin esperas</h2>
                    <div id="loginFormInputs">
                        <form id="loginForm" onSubmit={this.onSubmit}>
                            <input type="email" name="email" id="loginEmailInput" required placeholder="Introduce tu email"/>
                            <input type="password" name="password" id="loginPasswordInput" required placeholder="Introduce tu contraseña" />
                            <span id="errorLogin">{this.state.errorLogin}</span>
                            <button id="loginButton" type="submit">Entrar</button>
                            <button id="registerButtonLogin" onClick={this.register}>Aún no estoy registrado</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login