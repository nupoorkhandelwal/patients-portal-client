import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className='App-header'>
        <h2 >Health Portal</h2>
        <h4>Patient Health Records Tracking Application</h4>
        <div className='navbar'>
            <NavLink className='navbar a' to='/' activeClassName='activeNav' exact={true} >Dashboard</NavLink>
            <NavLink className='navbar a' to='/add' activeClassName='activeNav'>Add Patient</NavLink>
        </div>
    </header>
);

export default Header;