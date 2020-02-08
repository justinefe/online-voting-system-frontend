import React from './node_modules/react';
import { NavLink } from './node_modules/react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>New Elections</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>TH</NavLink></li>
        </ul>
    );
};
 
export default SignedInLinks;