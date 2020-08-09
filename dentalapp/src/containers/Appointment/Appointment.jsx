import React from 'react';
import AppointmentsAvailable from '../../components/AppointmentsAvailable/AppointmentsAvailable.jsx';
import AppointmentsFixed from '../../components/AppointmentsFixed/AppointmentsFixed.jsx';
import axios from 'axios';

import './Appointment.css';
import logo from '../../img/logo.jpg';
import backURL from '../../config/api.js';
import { connect } from 'react-redux';

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
            this.props.history.push('/login');
        })
        .catch(error => {
            console.error(error)
        })
    }

    render(){
        return(
            <div id="appointmentContainer">
                <div id="appointmentWindow">
                    <div id="headerAppointmentContent">
                        <img id="appointmentLogoImage" src={logo} alt="Imagen del logo" onClick={this.landing} />
                        <div id="userInfo">
                            <div id="salutation"> Bienvenido/a {this.props.user?.name} </div>
                            <button id="logoutButton" onClick={this.logout}>Salir</button>
                        </div>
                    </div>
                    <AppointmentsAvailable />
                    <AppointmentsFixed />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({user}) => ({user:user});
export default connect(mapStateToProps)(Appointment);