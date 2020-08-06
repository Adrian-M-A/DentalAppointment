import React from 'react';
import { cancelAppointment } from '../../services/redux/actions.js';
import { connect } from 'react-redux';

import './AppointmentFixedItem.css';

const AppointmentFixedItem = ({appointmentFixed}) => {

    const cancelAppointmentFixed = (appointmentFixedId, appointmentFixed) =>{
        const body = {
            'hour': appointmentFixed.hour,
            'day': appointmentFixed.day,
            'month': appointmentFixed.month,
            'year': appointmentFixed.year,
            'available': 1,
            'user_id': "0"        
        };
        cancelAppointment(appointmentFixedId, body);
    }

    return(
            <div className="fixedAppointment">
                <span id="fixedAppointmentHour">Hora: {appointmentFixed.hour}</span>
                <span id="fixedAppointmentDay">Día: {appointmentFixed.day}</span>
                <span id="fixedAppointmentMonth">Mes: {appointmentFixed.month}</span>
                <button id="cancelAppointment" onClick={() => cancelAppointmentFixed(appointmentFixed.id, appointmentFixed)} >Cancelar cita</button>
            </div>
        )
}

const mapStateToProps = ({user}) => ({user:user});
export default connect(mapStateToProps)(AppointmentFixedItem);
