import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {  sendResetLinkAction, cleanUpResetAction } from '../../store/actions/ResetPasswordLink';
import { decryptQuery } from '../../utils';
import InputForm from '../../components/InputForm';
// import Button from '../../components/Button';
// import SignSvg from '../../assets/svg/SignIn';
import toast from '../../components/Toast';
import Loader from '../../components/Loader';
import './index.scss';



const ResetPasswordLink = ({ 
      isSubmitting, 
      resendLink,
      authResponse,
      cleanUpReset 
  }) => {    
  useEffect(() => {
    cleanUpReset();
  }, []);

  useEffect(() => {
    if (authResponse.error && isSubmitting === false)     toast('Email does not seem to exist on the app', 'error');

  }, [authResponse]);

  const [email, setEmail] = useState({ email:'' });

  const handleChange = (e) => {
    e.persist();
    setEmail({
      ...email,
      [event.target.id]: event.target.value
  });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resendLink(email);
  };
    return (
        <div className='content'>
                <div id = 'form'>
                  <form  onSubmit={handleSubmit}>
                    <h5>Forgot your account’s 
                        password or having trouble logging into your smart voting? 
                        Enter your email address and we’ll send you a recovery link.
                        </h5>                         
                        <InputForm
                        classes="inputForm"
                        onChange={handleChange}
                        labelname="Email"
                        uniqueId="email"
                        labelClass="Label"
                        inputType="email"
                        inputClass="Input"
                        placeholder="johndoe@example.com"
                        pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
                        title="johndoe@example.com"
                        /> 
                          <button id="register" type="submit" classes="btn" > { isSubmitting ? <Loader/> : 'Send recovery email'} </button>
                 </form>    
              </div>    
        </div> 
        );
    };

const mapDispatchToProps = {
  resendLink: payload => sendResetLinkAction(payload),
  cleanUpReset: () => cleanUpResetAction() 
};

const mapStateToProps = state=> ({
    authResponse: state.resetPassword.response,
    isSubmitting: state.resetPassword.isSubmitting,
  });

  export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordLink);
