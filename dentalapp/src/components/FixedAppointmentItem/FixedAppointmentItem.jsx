import React from 'react';

import './FixedAppointmentItem.css';
import { connect } from 'react-redux';

const AppointmentItem = ({fixedAppointment}) => {

    return(
            <div className="fixedAppointment">
                <span id="fixedAppointmentHour">Hora: {fixedAppointment.hour}</span>
                <span id="fixedAppointmentDay">Día: {fixedAppointment.day}</span>
                <span id="fixedAppointmentMonth">Mes: {fixedAppointment.month}</span>
                <button id="cancelAppointment" >Cancelar cita</button>
            </div>
        )
}

const mapStateToProps = ({user}) => ({user:user});
export default connect(mapStateToProps)(AppointmentItem);
