import React ,  { useState }from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { Redirect } from 'react-router-dom';
import EditUserInfo from '../EditProfile';
import UserInfo from '../UserInfo';
import './index.scss';

const Profile = ({ isAuthenticated }) => {
    
    const [ values, setValues ] = useState(<div style={{textAlign: 'center', fontSize: '1.5em'}}>loading...</div>);

    const handleEdit = event => {
        event.preventDefault();
        setValues();

    };
    if (!isAuthenticated) return <Redirect to='/signin'/>;
    return (
        <div id='down-view'>
             <div id='down-viewing-profile'>
                        <div id='edit-profile'>
                                <img id='profile-image'
                                src="../../assets/png/averter.png"
                                alt="voting"
                                />
                                <div><span> Justin Igugu</span></div>
                                <div id='profile-details-edit'>
                                    {UserInfo}
                                    <div className='text-center'>                             
                                    <Button id="register" onClick = {handleEdit} type="submit" name="Edit profile" className="btn btn-primary-dark" />      
                               </div>  
                                </div>
                        </div>
                        <div id='trending' className='container'>
                        <EditUserInfo/>
                        </div>
            </div>   
         </div>
    );
};

const mapStateToProps = state => ({
    // authError: state.auth.authError,
    // isLoading: state.auth.isLoading,
    // user: state.auth.user,
    // isCompleted: state.auth.isCompleted,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(Profile);
