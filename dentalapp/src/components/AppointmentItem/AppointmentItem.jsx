import React from 'react';
import { fixAppointment } from '../../services/redux/actions.js';

import './AppointmentItem.css';
import { connect } from 'react-redux';

const AppointmentItem = ({appointment}) => {
    
    const appointmentSelected = (appointmentId, appointment) => {
        console.log(appointment.id);
        const body = {
            'hour': appointment.hour,
            'day': appointment.day,
            'month': appointment.month,
            'year': appointment.year,
            'available': 0,        
        }
        console.log(body);
        fixAppointment(appointmentId, body)
    };


    return(
            <div className="appointment">
                <span id="appointmentHour">Hora: {appointment.hour}</span>
                <span id="appointmentDay">Día: {appointment.day}</span>
                <span id="appointmentMonth">Mes: {appointment.month}</span>
                <button id="fixAppointment" onClick={() => appointmentSelected(appointment.id, appointment)}>Reservar cita</button>
            </div>
        )
}

const mapStateToProps = ({user}) => ({user:user});
export default connect(mapStateToProps)(AppointmentItem);
