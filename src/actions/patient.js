import axios from '../axios/axios';

const _addPatient = (patient) => ({
    type: 'ADD_PATIENT',
    patient
});

export const addPatient = (patientDetails = {
    name: '',
    surname: '',
    city: '',

}) => {
    return (dispatch) => {
        const patient = {
            name: patientDetails.name,
            surname: patientDetails.surname,
            city: patientDetails.city,

        };

        return axios.post('patients', patient).then(result => {
            dispatch(_addPatient(result.data));
        });
    };
};

const _removePatient = ({ id } = {}) => ({
    type: 'REMOVE_PATIENT',
    id
});

export const removePatient = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`patients/${id}`).then(() => {
            dispatch(_removePatient({ id }));
        })
    }
};

const _editPatient = (id, updates) => ({
    type: 'EDIT_PATIENT',
    id,
    updates
});

export const editPatient = (id, updates) => {
    return (dispatch) => {
        return axios.put(`patients/${id}`, updates).then(() => {
            dispatch(_editPatient(id, updates));
        });
    }
};

const _getPatients = (patients) => ({
    type: 'GET_PATIENT',
    patients
});

export const getPatients = () => {
    var config = {
        headers: {"Access-Control-Allow-Origin": "*"}
    };

    return (dispatch) => {

        return axios.get('/patients',config).then(result => {

            console.log(JSON.stringify(result.data,null,4));
            const patients = [];

            result.data.getJSON("_embedded.patients").forEach(item => {
                patients.push(item);
            });

            dispatch(_getPatients(patients));
        });
    };
};