import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { Provider} from 'react-redux';
import {getPatients} from "./actions/patient";
import * as ReactDOM from "react-dom";


const store = getAppStore();

const template = (

      <Provider store={store}>
        <AppRouter />
      </Provider>
  );

const App =() =>(
    store.dispatch(getPatients()).then(() => {
        ReactDOM.render(template, document.getElementById('app'));
    })
);

export default App



