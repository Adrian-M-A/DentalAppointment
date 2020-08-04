import React from 'react';
import AppointmentsAvailable from '../../components/AppointmentsAvailable/AppointmentsAvailable.jsx';

import './Appointment.css';
import logo from '../../img/logo.jpg';

class Appointment extends React.Component {
    
    componentDidMount(){
        if(!localStorage.getItem('authToken')){
            this.props.history.push('');
        }
    }

    render(){
        return(
            <div id="appointmentContainer">
                <div id="appointmentWindow">
                    <img id="appointmentLogoImage" src={logo} alt="Imagen del logo" onClick={this.landing} />
                    <AppointmentsAvailable />
                    <div id="down"> citas pendientes

                    </div>
                </div>
            </div>
        )
    }
}

export default Appointment;