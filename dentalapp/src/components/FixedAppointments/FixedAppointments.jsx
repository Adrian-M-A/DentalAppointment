import React from 'react';
import {connect} from 'react-redux';
import { personalAppointment } from '../../services/redux/actions.js';
import FixedAppointmentItem from '../FixedAppointmentItem/FixedAppointmentItem.jsx';

import './FixedAppointments.css';

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
                        {this.props.fixedAppointments?.map(fixedAppointment => <FixedAppointmentItem 
                        key={fixedAppointment.id} fixedAppointment={fixedAppointment} />)}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({fixedAppointments}) => ({fixedAppointments:fixedAppointments})
export default connect(mapStateToProps)(PersonalAppointments);