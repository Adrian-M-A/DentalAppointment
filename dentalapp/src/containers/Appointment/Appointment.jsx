import React from 'react';
import AppointmentsAvailable from '../../components/AppointmentsAvailable/AppointmentsAvailable.jsx';
import PersonalAppointments from '../../components/PersonalAppointments/PersonalAppointments.jsx';
import axios from 'axios';

import './Appointment.css';
import logo from '../../img/logo.jpg';
import backURL from '../../config/api.js';

class Appointment extends React.Component {
    
    componentDidMount(){
        if(!localStorage.getItem('authToken')){
            this.props.history.push('');
        }
    }

    logout = () => {
        axios.get(backURL + 'user/logout')
        .then(res => {
            localStorage.removeItem('authToken');
            setTimeout(() => {
                this.props.history.push('/login');
            }, 500);
        })
        .catch(error => {
            console.error(error)
            this.setState({errorRegister: "No ha sido posible registrarlo."});
        })
    }

    render(){
        return(
            <div id="appointmentContainer">
                <div id="appointmentWindow">
                    <div id="headerAppointmentContent">
                        <img id="appointmentLogoImage" src={logo} alt="Imagen del logo" onClick={this.landing} />
                        <button id="logoutButton" onClick={this.logout}>Salir</button>
                    </div>
                    <AppointmentsAvailable />
                    <PersonalAppointments />
                </div>
            </div>
        )
    }
}

export default Appointment;