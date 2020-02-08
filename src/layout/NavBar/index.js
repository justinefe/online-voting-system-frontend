import React, { Fragment, useEffect } from 'react';
// import { withRouter } from 'react-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignOutLinks from '../SignedOutLinks';
import SignInLinks from '../SignedInLinks';


const Navbar = ({ history, isAuthenticated }) => {
           const ShowingNav = isAuthenticated ? <SignInLinks/> : <SignOutLinks/>;
       let Navigation = ShowingNav;
                  switch(history.location.pathname){
                     case '/signin': 
                            Navigation = ShowingNav;
                            break;
                     case '/': 
                            Navigation = ShowingNav;
                            break;
                     case '/signup': 
                            Navigation = ShowingNav;
                            break;
                     case '/reset_password_link': 
                            Navigation = ShowingNav;
                            break;
                     case '/change_password': 
                            Navigation = ShowingNav;
                            break;
                     default:
                            Navigation = '';
                  }
console.log(history.location.pathname);


useEffect(() => {

}, [history.location.pathname]);
    return (
           <Fragment>
            {Navigation}
            {console.log(Navigation, history.location.pathname)}
           </Fragment>
    );
};
const mapStateToProps = state => ({
       isAuthenticated: state.auth.isAuthenticated
});
 export default connect(mapStateToProps, null)(withRouter(Navbar));