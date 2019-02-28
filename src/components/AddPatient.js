import React from 'react';
import { connect } from 'react-redux';
import { addPatient } from '../actions/patient';
import PatientForm from "./PatientForm";

const AddPatient = (props) => (
    <div>
        <h3>Add Patient Details:</h3>
        <PatientForm
            onSubmitPatient={(patient) => {
                props.dispatch(addPatient(patient));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddPatient);