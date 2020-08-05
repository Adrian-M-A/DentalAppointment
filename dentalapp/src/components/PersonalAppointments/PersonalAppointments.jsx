import React from 'react';
import {connect} from 'react-redux';
import { appointmentsAvailable } from '../../services/redux/actions.js';
import PersonalAppointmentItem from '../AppointmentItem/AppointmentItem.jsx';

import './PersonalAppointments.css';

class PersonalAppointments extends React.Component{

    componentDidMount(){
        appointmentsAvailable();
    }

    render(){
        return(
            <div id="personalAppointments">
                <div id="personalAppointmentsHeader">Citas confirmadas</div>
                <div id="personalAppointmentsData">
                    <div id="appointments">
                        {this.props.PersonalAppointment?.map(PersonalAppointment => <PersonalAppointmentItem 
                        key={PersonalAppointment.id} PersonalAppointment={PersonalAppointment} />)}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({PersonalAppointment}) => ({PersonalAppointment:PersonalAppointment})
export default connect(mapStateToProps)(PersonalAppointments);