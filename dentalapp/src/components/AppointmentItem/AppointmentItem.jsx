import React from 'react';
import { fixAppointment } from '../../services/redux/actions.js';

import './AppointmentItem.css';

const AppointmentItem = ({appointment}) => {
    


    const appointmentSelected = (appointmentId, appointment) => {
        console.log(appointment)
        fixAppointment({appointmentId, appointment})
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

export default AppointmentItem;
