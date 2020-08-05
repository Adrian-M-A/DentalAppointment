import React from 'react';

import './AppointmentItem.css';

const AppointmentItem = ({appointment}) => {
    
    return(
            <div className="appointment">
                <span id="appointmentHour">Hora: {appointment.hour}</span>
                <span id="appointmentDay">Día: {appointment.day}</span>
                <span id="appointmentMonth">Mes: {appointment.month}</span>
                <button id="appointmentFix">Reservar cita</button>
            </div>
        )
}

export default AppointmentItem;
