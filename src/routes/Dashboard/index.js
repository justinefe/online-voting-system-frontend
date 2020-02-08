import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import SideBar from '../../layout/SideBar';
import Dashboardnav from '../../layout/Dashboardnav';
import Card from '../../layout/Card';
import { signOutAction } from '../../store/actions/AuthActions.js';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


// import Graph from '../../components/Graph';

const Dashboard = ({ component: Component, signOut, ...props }) => (

  <div className='dashboard'>
        <div className='aside'>
           <SideBar />
           <NavLink className='Link' to={() => signOut()}> <PowerSettingsNewIcon/> Log Out</NavLink>

       </div>
            <div className='main'>
                <div id='top-view'>
                  <Dashboardnav/>
                </div>
                <div>
                <div id='down-view'>
                <div id='overview'>
                    <div className='nav'>
                         <span>ELECTION OVERVIEW</span>
                         <ul>
                            <li>This week</li>
                            <li>This month</li>
                            <li>This year</li>
                         </ul>
                    </div>
                </div>
                <div className='graph container'>
                 <div className='row'>
                    <div className=' col-md-5 container' style={{ padding: '5px',  boxShadow:  '0 10px 30px rgba(0,0,0, 0.2)'}}>
                    <Route
                    {...props}
                    render={innerProps => <Component {...innerProps} />
                    }/>
                    <hr></hr>                  
                    </div>
                    <div className=' col-md-4 container'>
                       <Card/>
                       <hr></hr>
                       <Card/>
                       <hr></hr>
                       <Card/>
                       <hr></hr>
                       <Card/>
                    </div>
                    <div className=' col-md-3 container'>
                        <Card/>
                       <hr></hr>
                        <Card/>
                       <hr></hr>
                        <Card/>
                       <hr></hr>
                        <Card/>
                    </div>
                    </div>
                </div>
             </div>          
        </div>            
    </div>  
  </div>   
);


const mapDispatchToProps = ({
  signOut: () => signOutAction()
});

export default connect(null, mapDispatchToProps)(Dashboard);

