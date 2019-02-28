import { createStore, applyMiddleware } from "redux";
import patients from '../reducers/patients';
import thunk from 'redux-thunk';

export default () => {
    return createStore(patients, applyMiddleware(thunk));
};