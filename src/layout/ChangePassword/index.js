import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changePasswordAction, cleanUpPasswordChangeAction } from '../../store/actions/ChangePassword';
import { decryptQuery } from '../../utils';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
// import SignSvg from '../../assets/svg/SignIn';
import toast from '../../components/Toast';
import './index.scss';


const ChangePassword= ({  authResponse, resetPassword, location, history,
  cleanUpPasswordChange, isSubmitting, }) => {    
  useEffect(() => {
    cleanUpPasswordChange();
  }, []);

  useEffect(() => {
    if (authResponse.error && isSubmitting === false) toast(authResponse.error, 'error');
  }, [authResponse]);

  const [values, setValues] = useState({ password: '', confirmPassword: '' });

  const handleChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    const resetToken = urlParams.get('token');
  console.log('gggggggggggggggggggggggggg', urlParams);

    const payload = {
      password: values.password
      // resetToken
    };
    (values.password !== values.confirmPassword)
      ? toast('passwords must match', 'error')
      : resetPassword(payload);
  };
    return (
            <div className ="content">
                <div id = 'form'>
                  <form onSubmit={handleSubmit}>
                    <h5>Forgot your account’s 
                        password or having trouble logging into your smart voting? 
                        You are a step close. Enter your new password
                        </h5>  
                       
                        <InputForm
                            classes="inputForm"
                            onChange={handleChange}
                            labelname="Password"
                            uniqueId="password"
                            labelClass="Label"
                            inputType="password"
                            inputClass="Input"
                            placeholder="Password"
                            pattern="^[\w]{8,20}$"
                            title="Password is required and must be more than 8 character"
                            />   
                          <InputForm
                              classes="inputForm"
                              onChange={handleChange}
                              labelname="Confirm Password"
                              uniqueId="confirm_password"
                              labelClass="Label"
                              inputType="password"
                              inputClass="Input"
                              placeholder="Password"
                              pattern="^[\w]{8,20}$"
                              title="Password is required and must be more than 8 character"
                            />   
                        <Button id="register" type="submit" name="Change Password" classes="btn" /> 
                 </form>    
              </div>    
        </div> 
        );
    };


function mapStateToProps(state) {
    return {
      authResponse: state.changePassword.response,
      isSubmitting: state.changePassword.isSubmitting,
    };
  }
  
  const matchDispatchToProps = {
    resetPassword: (details) => changePasswordAction(details),
    cleanUpPasswordChange: () => cleanUpPasswordChangeAction(),
  };
  
export default connect(mapStateToProps, matchDispatchToProps)(ChangePassword);    

                