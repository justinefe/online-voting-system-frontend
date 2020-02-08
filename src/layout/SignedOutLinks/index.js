import React from 'react';
import { NavLink } from 'react-router-dom';
import '../SignedInLinks/index.scss';

const SignedOutLinks = () => {
    return (
        <div className='header'>
                <div id='logo'>
                 <NavLink className='NavLink' to='/'> Voting Machine </NavLink>            
                </div>
                 <div id='links'>
                    <ul >    
                        <li><NavLink className='NavLink' to='/signup'>Signup</NavLink></li>
                        <li><NavLink className='NavLink' to='/signin'>Signin</NavLink></li>
                    </ul>
                </div>
                
            </div>
    );
};

export default SignedOutLinks;