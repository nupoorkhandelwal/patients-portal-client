import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePatient } from '../actions/patient';

const Patient = ({ patientId, name, surname, city, dob,dispatch }) => (
    <div>
        <Link to={`http://localhost:8585/patients_portal/patients/${patientId}`}>
            <h4> {name} {surname}</h4>
        </Link>
        <p>City: {city}</p>
        <p>Date Of Birth: {dob}</p>
         <button onClick={() => {
             console.log({patientId});
            dispatch(removePatient({patientId}));
        }}>Remove</button>
    </div>
);

export default connect()(Patient);