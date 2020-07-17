import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAction } from '../../store/actions/AuthActions.js';
import { MdDashboard } from 'react-icons/Md';
import './index.scss';


const SignedInLinks = ({ signOut }) => {
    return (
        <div className='header'>
                <div id='logo'>
                 <MdDashboard className='dashboard-icon logo-icon'/> 
                 <NavLink className='NavLink' to='/'> Voting Machine </NavLink>            
                </div>
                <div className = 'shared'>
                 <div id='links'>
                    <ul > 
                        <li><NavLink to='/profile' className='NavLink'>My Profile </NavLink></li>
                        <li><NavLink to='/trending' className='NavLink'>New Elections  </NavLink></li>
                        <li><NavLink to='/' className='NavLink' onClick = { () => signOut() }>Log Out  </NavLink></li>
                        <li><NavLink to='/' className='NavLink'>Justin Igugu  </NavLink></li>
                    </ul>
                    
                </div>
                <NavLink to='/' className='NavLink'>
                   <span>
                    <img 
                        id='profile-nav-image' 
                        src="../../assets/png/averter.png"
                        alt="voting"
                        />
                    </span>
                </NavLink>
               </div>
                
            </div>
    );
};
 const mapDispatchToProps = ({
        signOut: () => signOutAction()
    });

export default connect(null, mapDispatchToProps)(SignedInLinks);
