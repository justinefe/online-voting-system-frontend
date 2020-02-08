import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import SideBar from '../../layout/SideBar';
import Dashboardnav from '../../layout/Dashboardnav';

const PublicRoute = ({ component: Component, isAuthenticated, ...props }) => (

  <div className='dashboard'>
        <div className='aside'>
           <SideBar />
       </div>
            <div className='main'>
                <div id='top-view'>
                  <Dashboardnav/>
                </div>
                <div>
                <Route
                {...props}
                render={innerProps => <Component {...innerProps} />
                }
                />
                 </div>
        </div>            
    </div>  
 
);


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(PublicRoute);
