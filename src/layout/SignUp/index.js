import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import InputForm from '../../components/InputForm';
// import Button from '../../components/Button';
import SignSvg from '../../assets/svg/SignIn';
import './index.scss';
import toast from '../../components/Toast';
import SocialLogin from '../../assets/svg/SocialLogin';
// import DescriptionAlerts from '../../components/Toaster';
import { signUpUserAction, cleanUpAuth, socialSignInAction } from '../../store/actions/AuthActions.js';
import Loader from '../../components/Loader';



const SignUp = ({ isCompleted, isLoading, history, isAuthenticated, cleanUp, authError, signUp }) => {
        
         const [ values, setValues ] = useState({
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            });
   

   const handleChange  = (e) => {
        setValues({
            ...values,
            [event.target.id]: e.target.value
        });
    };

   const handleSubmit = (e) => {
        e.preventDefault();
        signUp(values);
    };


    useEffect(
        () => {
            if (isCompleted && !authError) {
                toast('Signup successful', 'success');
              history && history.push('/');
            }
            if (authError) {
              toast(authError, 'error');
            }
            if (localStorage.socialLogin === 'false' && location.search) {
              const urlParams = new URLSearchParams(location.search);
              const token = urlParams.get('token');
              const username = urlParams.get('username');
              if (!username || !token) {
                /* istanbul ignore next */
                history && history.push('/signin');
              } else if (!isCompleted) {
                try {
                  socialSignInAction({ username, token: decryptQuery(token), history });
                } catch (err) {
                  toast('Invalid operation', 'error');
                }
              }
            }
            /* istanbul ignore next */
            return () => 
              /* istanbul ignore next */
              cleanUp();
          },
          [isCompleted, authError]
        );
    
      const handleSocial = (e) => {
        const { id } = e.target;
        localStorage.setItem('socialLogin', false);
        window.location = `${process.env.SERVER_URL}/auth/${id}`;
      };
      return (
            <div id='container'>
                <div id ="form-container">
                    <div id = 'form'>
                      <form onSubmit={handleSubmit} >
                        <h5>Already Have an account? <NavLink className='NavLink' to='/signin'>Signin</NavLink></h5>  
                            <InputForm
                                classes="inputForm"
                                onChange={handleChange}
                                labelname="First Name"
                                uniqueId="first_name"
                                labelClass="Label"
                                inputType="text"
                                inputClass="Input"
                                placeholder=" John"
                                pattern="^[A-Za-z]+$"
                                title="First Name is required and must be more than 3 character"
                             />     
                            <InputForm
                                classes="inputForm"
                                onChange={handleChange}
                                labelname="Last Name"
                                uniqueId="last_name"
                                labelClass="Label"
                                inputType="text"
                                inputClass="Input"
                                placeholder=" Doe"
                                pattern="^[A-Za-z]+$"
                                title="username is required and must be more than 3 character"
                            /> 
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
                         
                            <button id="register" type="submit" classes="btn" > { isLoading ? <Loader/> : 'Sign In'} </button>   
                            <p>OR</p>
                            </form>  
                    </div>
                    <div id='social'>
                    <button
                      onClick={handleSocial}
                      id="twitter"
                      type="button"
                      className="btn"
                     >
                       
                     <img className='button-inner'
                      src="../../assets/png/twit.png"
                      alt="voting"
                    />

                    <span>Sign up with Twitter</span>

                    </button>
                    <button
                      onClick={handleSocial}
                      id="facebook"
                      type="button"
                      // name="Login"
                      className="btn"
                    >
                    <img className='button-inner'
                    src="../../assets/png/facebook.png"
                    alt="voting"
                   />     
                        <span>Sign up with Facebook</span>

                    </button>
                    <button
                        onClick={handleSocial}
                        id="google"
                        type="button"
                        // name="Login"
                        className="btn"
                     >
               
                    <img className='button-inner'
                    src="../../assets/png/google.png"
                    alt="voting"
                    />
                    <span>Sign up with Google</span>
                    </button>
            </div> 
                        
          </div>
                  <div id='svg'>
                   <strong> Sign up made easy, with simple steps you are almost done</strong>                
                    <SignSvg/> 
                    <strong> Continue with Twitter, Facebook or Google</strong> 
                     <SocialLogin/>          
                  </div>    
            </div>       
            );
    };
    
    const mapDispatchToProps = 
        {
            signUp: user => signUpUserAction(user),
            socialSignIn: userObj => socialSignInAction(userObj),
            cleanUp: () => cleanUpAuth()
        };

    const mapStateToProps = state => (
        {
            authError: state.auth.authError,
            user: state.auth.user,
            isAuthenticated: state.auth.isAuthenticated,
            isCompleted: state.auth.isCompleted,
            isLoading: state.auth.isLoading,
        }
    );

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

                