import React from 'react';
import { connect } from 'react-redux';
import Patient from './Patient';

const PatientList = (props) => (
    <div>
        Patient List:
        <ul>
            {props.patients.map(patient => {
                return (
                    <li key={patient.patientId}>
                        <Patient {...patient} />
                    </li>
                );
            })}
        </ul>

    </div>
);

const mapStateToProps = (state) => {
    return {
        patients: state
    };
}

export default connect(mapStateToProps)(PatientList);