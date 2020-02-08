import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { onSignInAction, cleanUpAuth, socialSignInAction } from '../../store/actions/AuthActions.js';
import { decryptQuery } from '../../utils';
import InputForm from '../../components/InputForm';
import SignSvg from '../../assets/svg/SignIn';
import toast from '../../components/Toast';
import './index.scss';
import SocialLogin from '../../assets/svg/SocialLogin';
import Loader from '../../components/Loader';


 const SignIn = (
    {
    authError,
    isLoading,
    isAuthenticated,
    cleanUp,
    isCompleted,
    socialSignIn,
    // user,
    signIn,
    history
}
   ) => {
    const [values, setValues] = useState({
                email: '',
                password: ''
            });
    const handleChange = event => {
        setValues({
            ...values,
            [event.target.id]: event.target.value
        });

    };
    
    const handleSubmit = event => {
        event.preventDefault();
        signIn(values);
    };
    useEffect(
    () => {
       if (isCompleted && !authError) {
            toast('Login successful', 'success');
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
              socialSignIn({ username, token: decryptQuery(token), history });
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
      [isCompleted, isAuthenticated, authError]
    );
      const handleSocial = (e) => {
        const { id } = e.target;
        localStorage.setItem('socialLogin', false);
        window.location = `${process.env.SERVER_URL}/auth/${id}`;
      };
    return (
        <Fragment>
          <div id='container'>
            <div id ="form-container">
                <div id = 'form'>
                  <form onSubmit={handleSubmit}>
                    <h5>Don not Have an account? <NavLink className='NavLink' to='/signup'>Sign Up</NavLink></h5>  
                       
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
                            <NavLink className='NavLink' to='/reset_password_link'><p>Forget Password?</p></NavLink> 

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

                        <span>Sign in with Twitter</span>
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
                        <span>Sign in with Facebook</span>

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
                       <span>Sign in with Google</span>
                        </button>
                </div> 
                            
              </div>
              <div id='svg'>
               <strong> Sign in made easy, with simple steps you are almost done</strong>                
                <SignSvg/> 
                <strong> Continue with Twitter, Facebook or Google</strong> 
                 <SocialLogin/>          
              </div>    
           </div> 
        </Fragment>      
        );
    //  }
    };

    const mapDispatchToProps = {
            signIn: creds => onSignInAction(creds),
            socialSignIn: userObj => socialSignInAction(userObj),
            cleanUp: () => cleanUpAuth()
        };


    const mapStateToProps = state => ({
            authError: state.auth.authError,
            isLoading: state.auth.isLoading,
            user: state.auth.user,
            isCompleted: state.auth.isCompleted,
            isAuthenticated: state.auth.isAuthenticated,
        });

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

                