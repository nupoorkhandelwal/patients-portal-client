import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePatient } from '../actions/patient';

const Patient = ({ id, name, surname, city, dob,dispatch }) => (
    <div>
        <Link to={`/patients/${id}`}>
            <h4>{name} ({surname})</h4>
        </Link>
        <p>City: {city}</p>

        <button onClick={() => {
            dispatch(removePatient({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(Patient);