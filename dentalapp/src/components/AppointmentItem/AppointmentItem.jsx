import React from 'react';

import './AppointmentItem.css';

// class AppointmentItem extends React.Component{


//     render(){

//         return(
//             <div className="appointment">
//                 <span>{appointment.hour}</span>
//                 <span>{appointment.day}</span>
//                 <span>{appointment.month}</span>
//                 <span>{appointment.year}</span>
//                 <button>Reservar cita</button>
//             </div>
//         )
//     }
// }

// export default AppointmentItem;


const AppointmentItem = ({appointment}) => {
    
    return(
            <div className="appointment">
                <span>{appointment.hour}</span>
                <span>{appointment.day}</span>
                <span>{appointment.month}</span>
                <span>{appointment.year}</span>
                <button>Reservar cita</button>
            </div>
        )
}

export default AppointmentItem;