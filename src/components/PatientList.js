import React from 'react';
import { connect } from 'react-redux';
import Patient from '../components/Patient';

const PatientList = (props) => (
    <div>
        Patient List:
        <ul>
            {props.patients.map(patient => {
                return (
                    <li key={patient.name} title={'Hi'}>
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