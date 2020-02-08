import React from 'react';
// import { NavLink } from 'react-router-dom';
import './index.scss';

const Navbar = () => {
    return (
            <div className='header'>
                <div id='logo'>
                 <a to='/home'> Voting Machine </a>            
                </div>
                 <div id='links'>
                    <ul >    
                        <li><a  to='/signup'>Signup</a></li>
                        <li><a  to='/signin'>Signin</a></li>
                    </ul>
                </div>
                
            </div>
    );
};
 export default Navbar;
