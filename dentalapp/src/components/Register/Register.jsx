import React from "react";
import axios from "axios";
import "./Register.css";
import logo from '../../img/logo.jpg';

class Register extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            surnames: "",
            address: "",
            phone: "",
            document: "",
            email: "",
            password: "",
            password2: "",
            errorName:"",
            errorSurnames:"",
            errorAddress: "",
            errorDocument: "",
            errorPhone:"",
            errorEmail:"",
            errorPassword: "",
            errorPasswords: "",
            errorRegister: "",
            registered: false
        }
    };

    handleChange = (ev) =>{
        this.setState({[ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value}); 
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({errorName:""});
        this.setState({errorSurnames:""});
        this.setState({errorSurnames:""});
        this.setState({errorAddress:""});
        this.setState({errorDocument:""});
        this.setState({errorPassword:""});
        this.setState({errorPasswords:""});
        this.setState({errorRegister:""});
        this.setState({errorPhone:""});
        this.setState({errorEmail:""});

        let nameRegex = new RegExp("[0-9]");
        let phoneRegex = new RegExp("[a-zA-Z]");
        let passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        let dniRegex = new RegExp("^[0-9]{8,8}[A-Za-z]$");
        //Error control
        if(this.state.name.length > 20 || this.state.name.length < 3 || nameRegex.test(this.state.name) || this.state.name === ""){
            this.setState({errorName: "Introduzca un nombre válido."});
            return;
        }
        if(this.state.surnames.length > 35 || this.state.surnames.length < 3 || this.state.surnames === ""){
            this.setState({errorSurnames: "Introduzca unos apellidos válidos."});
            return;
        }
        if(this.state.address.length > 35 || this.state.address === ""){
            this.setState({errorAddress: "Introduzca una dirección correcta."});    
            return;
        }
        if(this.state.phone.length < 9 || this.state.phone.length > 9|| this.state.phone === "" || phoneRegex.test(this.state.phone)){
            this.setState({errorPhone: "Introduzca un teléfono correcto."});
            return;
        }
        if(!dniRegex.test(this.state.document) || this.state.document === ""){
            this.setState({errorDocument: "El DNI introducido no es válido."});
            return;
        }
        if(this.state.email === ""){
            this.setState({errorEmail: "El email introducido no es válido."});
            return;
        }
        if(!passwordRegex.test(this.state.password) || this.state.password === ""){
            this.setState({errorPassword: "La contraseña debe contener 1 mayús 1 minús 1 número 1 símbolo y tener 8 carácteres." });
            return;
        }
        if(this.state.password !== this.state.password2){
            this.setState({errorPasswords: "Los dos passwords deben coincidir."});
            return;
        }   
        
        let body = {
            name: this.state.name,
            surnames: this.state.surnames,
            address: this.state.address,
            phone: this.state.phone,
            document: this.state.document,
            email: this.state.email,
            password: this.state.password
        };

        axios.post("http://localhost:3001/users/register", body)
        .then(res => {
            setTimeout(() => {
                this.props.history.push('/login');
            }, 500);
        })
        .catch(error => {
            console.error(error)
            this.setState({errorRegister: "No ha sido posible registrarlo."});
        })
    };

    render() {
        return(
            <div id="registerContainer">
                <div id="registerWindow">
                    <div id="windowContent">
                        <div id="registerHeader">
                            <div id="registerLogoImage">
                                <img id="logoHeader" src={logo} alt="Imagen del logo" />
                            </div>
                        </div> 
                        <h2 id="registerH2">Rellena con tus datos para pedir cita.</h2>
                        <div id="registerFormInputs">
                            <form id="registerForm" onSubmit={this.handleSubmit}>
                                <div id="registerFormLeft">
                                    <input type="text" name="name" id="nameinput" value={this.state.name} onChange={this.handleChange} placeholder="Nombre"/>
                                    <span id="errorName">{this.state.errorName}</span>
                                    <input type="text" name="surnames" id="surnamesinput" value={this.state.surnames} onChange={this.handleChange} placeholder="Apellidos" />
                                    <span id="errorSurnames">{this.state.errorSurnames}</span>
                                    <input type="text" name="address" id="addressinput" value={this.state.address} onChange={this.handleChange} placeholder="Dirección de envío" />
                                    <span id="errorAddress">{this.state.errorAddress}</span>
                                    <input type="text" name="phone" id="phoneinput" value={this.state.phone} onChange={this.handleChange} placeholder="Teléfono" />
                                    <span id="errorPhone">{this.state.errorPhone}</span>
                                    <input type="text" name="document" id="documentinput" value={this.state.document} onChange={this.handleChange} placeholder="DNI" />
                                    <span id="errorDocument">{this.state.errorDocument}</span>
                                </div>
                                <div id="registerFormRight">
                                    <input type="email" name="email" id="emailInput" value={this.state.email} onChange={this.handleChange} placeholder="Introduce tu email"/>
                                    <span id="errorEmail">{this.state.errorEmail}</span>
                                    <input type="password" name="password" id="password1Input" value={this.state.password} onChange={this.handleChange} placeholder="Introduce tu contraseña" />
                                    <span id="errorPassword">{this.state.errorPassword}</span>
                                    <input type="password" name="password2" id="password2Input" value={this.state.password2} onChange={this.handleChange} placeholder="Repite tu contraseña" />
                                    <span id="errorPasswords">{this.state.errorPasswords}</span>
                                    <button id="registerButton" type="submit">Registrar</button>
                                    <span id="errorRegister">{this.state.errorRegister}</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Register;