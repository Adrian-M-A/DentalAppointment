import React from 'react';

import './Appointment.css';
import logo from '../../img/logo.jpg';

class Appointment extends React.Component {


    render(){
        return(
            <div id="appointmentContainer">
                <div id="appointmentWindow">
                    <img id="appointmentLogoImage" src={logo} alt="Imagen del logo" onClick={this.landing} />
                    <div id="up"> citas disponibles

                    </div>
                    <div id="down"> citas pendientes

                    </div>
                </div>
            </div>
        )
    }
}

export default Appointment;