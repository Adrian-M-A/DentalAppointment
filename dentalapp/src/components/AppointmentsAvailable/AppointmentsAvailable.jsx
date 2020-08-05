import React from 'react';
import { connect } from 'react-redux';
import { appointmentsAvailable } from '../../services/redux/actions.js';
import AppointmentItem from '../AppointmentItem/AppointmentItem.jsx';

import './AppointmentsAvailable.css';

class AppointmentsAvailable extends React.Component{

    componentDidMount(){
        appointmentsAvailable();
    }

    render(){
        return(
            <div id="appointmentsAvailable">
                <div id="appointmentsAvailableHeader">Citas disponibles</div>
                <div id="appointmentsAvailableData">
                    <div id="appointments">
                        {this.props.appointmentsAvailable?.map(appointment => <AppointmentItem 
                        key={appointment.id} appointment={appointment} />)}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({appointmentsAvailable}) => ({appointmentsAvailable:appointmentsAvailable});
export default connect(mapStateToProps)(AppointmentsAvailable);