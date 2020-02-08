import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Main from '../Main';
import AsideMain from '../AsideMain';


const SignedOutLinks = () => {
    return (
       <div>
            <NavBar/>
            <Main/>
            <AsideMain/>
            <Footer/>
       </div>
    );
};

export default SignedOutLinks;