import axios from '../axios/axios';

const _addPatient = (patient) => ({
    type: 'ADD_PATIENT',
    patient
});

export const addPatient = (patientDetails = {
    name: '',
    surname: '',
    city: '',
    dob: ''

}) => {
    return (dispatch) => {
        const patient = {
            name: patientDetails.name,
            surname: patientDetails.surname,
            city: patientDetails.city,
            dob : patientDetails.dob



        };

        return axios.post('patients', patient).then(result => {
            dispatch(_addPatient(result.data));
        });
    };
};

const _removePatient = ({ patientId } = {}) => ({
    type: 'REMOVE_PATIENT',
    patientId
});

export const removePatient = ({ patientId } = {}) => {
    return (dispatch) => {
        console.log('id value is ' + patientId);
        return axios.delete(`patients/${patientId}`).then(() => {
            dispatch(_removePatient({ patientId }));
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
        headers: {'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": true}
    };

    return (dispatch) => {

        return axios.get('/patients', config)
            .then((result) => {
            const patients = [];

            result.data._embedded.patients.forEach(item => {
                patients.push(item);
            })

            dispatch(_getPatients(patients));
        });
    };
};