import React,{ Suspense,  lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from '../SideBar';
import Dashboardnav from '../Dashboardnav';
// import { Button } from 'react-bootstrap';
// import EditUserInfo from '../EditProfile';
// import UserInfo from '../UserInfo';
// import './index.scss';


const Profile = lazy(() => import('../Profile'));
// const About = lazy(() => import('./routes/About'));




const Dash = () => {
    return (
        <div className='dashboard'>
        <div className='aside'>
           <SideBar />
       </div>
            <div className='main'>
                <div id='top-view'>
                  <Dashboardnav/>
                </div>
                <div>
                <Route exact path='/profile' component={Profile}/>
                 </div>
        </div>            
    </div>             
    );
};

export default Dash;
