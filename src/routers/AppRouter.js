import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from'../components/Dashboard';
import NotFound from '../components/NotFound';
import AddPatient from "../components/AddPatient";


const AppRouter =() =>(
    <BrowserRouter>
        <div className='container'>
            <Header/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/add" component={AddPatient} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
