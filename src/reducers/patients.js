const patientsReducerDefaultState = [];

export default (state = patientsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            return [
                ...state,
                action.patient
            ];
        case 'REMOVE_PATIENT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PATIENT':
            return state.map((patient) => {
                if (patient.id === action.id) {
                    return {
                        ...patient,
                        ...action.updates
                    };
                } else {
                    return patient;
                }
            });
        case 'GET_PATIENT':
            return action.patient;
        default:
            return state;
    }
};