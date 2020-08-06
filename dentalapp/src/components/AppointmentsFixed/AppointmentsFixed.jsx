import React from 'react';
import {connect} from 'react-redux';
import { personalAppointment } from '../../services/redux/actions.js';
import AppointmentFixedItem from '../AppointmentFixedItem/AppointmentFixedItem.jsx';

import './AppointmentsFixed.css';

class PersonalAppointments extends React.Component{

    componentDidMount(){
        personalAppointment();
    }

    render(){
        return(
            <div id="fixedAppointments">
                <div id="fixedAppointmentsHeader">Citas confirmadas</div>
                <div id="fixedAppointmentsData">
                    <div id="appointments">
                        {this.props.appointmentsFixed?.map(appointmentFixed => <AppointmentFixedItem 
                        key={appointmentFixed.id} appointmentFixed={appointmentFixed} />)}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({appointmentsFixed}) => ({appointmentsFixed:appointmentsFixed})
export default connect(mapStateToProps)(PersonalAppointments);