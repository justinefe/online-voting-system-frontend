import React, { Fragment } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Route, HashRouter as Router, Switch, withRouter} from 'react-router-dom';

// import './styles/app.scss';
import { ToastContainer } from 'react-toastify';
import PublicRoute from '../routes/Public';
import PrivateRoute from '../routes/Private';
import DashboardRoute from '../routes/Dashboard';
import Home from '../layout/HomePage';
import About from '../layout/About';
import Signin from '../layout/Signin';
import Signup from '../layout/Signup';
import NavBar from '../layout/NavBar';
import ChangePassword from '../layout/ChangePassword';
import ResetPasswordLink from '../layout/ResetPasswordLink';
import RegisterCandidate from '../layout/RegisterCandidate';
import RegisterOffice from '../layout/RegisterOffice';
import RegisterParty from '../layout/RegisterParty';
import RegisterVoter from '../layout/RegisterVoter';
import viewAllCandidate from '../layout/ViewAllCandidate';
import viewCandidate from '../layout/ViewCandidate';
import AssignRole from '../layout/SuperAdminAssignRole';
import AssignPermission from '../layout/SuperAdminAssignPermission';
import JoinParty from '../layout/JoinParty';
import ApproveCandidate from '../layout/ApproveCandidate';
import ApproveParty from '../layout/ApproveParty';
import ApprovePartyAdministrator from '../layout/ApprovePartyAdministrator';
import ApprovePartyMember from '../layout/ApprovePartyMember';
import StartElection from '../layout/StartElection';
import EndElection from '../layout/EndElection';
import Dashboard from '../layout/Dashboard';
import Profile from '../layout/Profile';
// import Dash from '../layout/Dash';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.scss';
import Cascade from '../layout/Cascade';
const App = ({ history }) => 
           (  
                <Fragment>
                  <NavBar history={history}/>
                  <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Route path='/signup' component={Signup}/>
                  <Route path='/signin' component={Signin}/>
                  <Route path='/change_password' component={ChangePassword}/>
                  <Route path='/reset_password_link' component={ResetPasswordLink}/>
                  <DashboardRoute  path='/register_candidate' component={RegisterCandidate}/>
                  <Route path='/register_office' component={RegisterOffice}/>
                  <DashboardRoute  path='/register_party' component={RegisterParty}/>
                  <PublicRoute  path='/profile' component={Profile}/>
                  <DashboardRoute  path='/register_voter' component={RegisterVoter}/>
                  <DashboardRoute  path='/view_all_candidate' component={viewAllCandidate}/>
                  <Route  path='/view_candidate' component={viewCandidate}/>
                  <Route  path='/cascade' component={Cascade}/>
                  <PrivateRoute path='/assign_role' component={AssignRole}/>
                  <PrivateRoute path='/assign_permission' component={AssignPermission}/>
                  <DashboardRoute  path='/join_party' component={JoinParty}/>
                  <PrivateRoute path='/approve_candidate' component={ApproveCandidate}/>
                  <PrivateRoute path='/approve_party' component={ApproveParty}/>
                  <PrivateRoute path='/approve_party_admin' component={ApprovePartyAdministrator}/>
                  <PrivateRoute path='/approve_party_member' component={ApprovePartyMember}/>
                  <PrivateRoute path='/start_election' component={StartElection}/>
                  <PrivateRoute path='/end_election' component={EndElection}/>
                  <PublicRoute  path='/dashboard' component={Dashboard}/>
                  </Switch>
                  <ToastContainer autoClose={5000} position="top-right" hideProgressBar rtl={false} pauseOnHover />
                 </Fragment>
           );

const AppWithRouter = withRouter(App);

const Routes = () => (
  <Router>
    <AppWithRouter />
  </Router>
);

export default Routes;
