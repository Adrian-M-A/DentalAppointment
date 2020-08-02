import React from 'react';

import './Login.css';
import logo from '../../img/logo.jpg';

class Login extends React.Component {
    constructor (props){
        super (props)

        this.state = {
            errorLogin: ""
        }
    };

    onSubmit(event){
        event.preventDefault();
        const credentials ={
            email: event.target.email.value,
            password: event.target.password.value
        }
        // login(credentials)
        // .then(() => {
        //     this.props.history.push('/')
        // })
        // .catch(() => {
        //     this.setState({errorLogin: 'Usuario no registrado.'})
        // })

    }

    register = () => {
        this.props.history.push('/#thirdSection');
    }

    render(){
        return(
            <div id="loginContainer">
                <div id="loginWindow"> 
                    <div id="loginwindowHeader">
                        <img id="loginLogoImage" src={logo} alt="Imagen del logo" />
                    </div>
                    <h2 id="loginH2">Pide cita sin esperas</h2>
                    <div id="loginFormInputs">
                        <form id="loginForm" onSubmit={this.onSubmit}>
                            <input type="email" name="email" id="loginEmailInput" placeholder="Introduce tu email"/>
                            <input type="password" name="password" id="loginPasswordInput" placeholder="Introduce tu contraseña" />
                            <span id="errorLogin">{this.errorLogin}</span>
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