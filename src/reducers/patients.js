const patientsReducerDefaultState = [];

export default (state = patientsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            return [
                ...state,
                action.patient
            ];
        case 'REMOVE_PATIENT':
            return state.filter(({ patientId }) => patientId !== action.patientId);
        case 'EDIT_PATIENT':
            return state.map((patient) => {
                if (patient.patientId === action.patientId) {
                    return {
                        ...patient,
                        ...action.updates
                    };
                } else {
                    return patient;
                }
            });
        case 'GET_PATIENT':
            return action.patients;
        default:
            return state;
    }
};