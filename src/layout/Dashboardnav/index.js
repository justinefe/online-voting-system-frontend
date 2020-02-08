import React from 'react';
import Input from '../../components/Input';
import { IoIosNotificationsOutline } from 'react-icons/Io';






const Dashboardnav = () => {
    return (
                  <div className='nav'>
                            <Input uniqueId="search"
                                inputType="text"
                                classes="Input detail-input search-input"
                                placeholder=" Search"
                            />
                            <div id='nav-right'>
                                <span>Justin Igugu</span>
                                <IoIosNotificationsOutline className='dashboard-icon notifs'/>
                                <span><img id='dashboard-image'
                                src="../../assets/png/averter.png"
                                alt="voting"/>
                                </span>
                            </div>                  
                        </div>
    );
};

export default Dashboardnav;
