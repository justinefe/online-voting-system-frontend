import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { onSignIn } from '../../store/actions/AuthActions.js';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
import toast from '../../components/Toast';
import './index.scss';


const RegisterParty = () => {
     const [ values, setValues ] = useState({
        phoneNumber: '',
        partyName: '',
        address:'',
        logo:''
    });
    const handleChange = (event) => {
        toast('Kindly login', 'error');
        setValues({
            ...values,
            [event.target.id]: event.target.value
        });

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // signIn(values);
        toast('Kindly login', 'error');
    }

    return (
        <div className='container'>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
        <h5 className='heading'>Hi! You wanna register as a candidate to contest an election? Then you are a few steps away</h5>
            <hr></hr>
                <form onSubmit={handleSubmit}>
                   <div className='form-group'>                            
                        <Label labelname="Name of Party" uniqueId="partyName"                           
                        />
                        <Input
                        onChange={handleChange}
                        uniqueId="partyName"
                        inputType="text"
                        classes="form-control"
                        placeholder="People Democratic Party"
                        // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                        // title="Email is required and must be more than 3 character"
                        />  
                 </div>
                    <div className='form-group'>                            
                    <Label labelname="Party address" uniqueId="address"                           
                    />
                    <Input
                    onChange={handleChange}
                    uniqueId="address"
                    inputType="text"
                    classes="form-control"
                    placeholder="George W. Bush way london"
                    // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                    // title="Email is required and must be more than 3 character"
                    />  
                     </div>
                     <div className='form-group'>                            
                     <Label labelname="Contact Phone Number" 
                     uniqueId="phoneNumber"
                     />
                     <Input
                     onChange={handleChange}
                     uniqueId="phoneNumber"
                     inputType="text"
                     classes="form-control"
                     placeholder="07035688050"
                     // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                     // title="Email is required and must be more than 3 character"
                     />  
              </div>
              <div className='form-group'>                            
                     <Input
                     onChange={handleChange}
                        uniqueId="logo"
                        inputType="file"
                        classes="form-control"
                  // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                     // title="Email is required and must be more than 3 character"
                     />  
                    </div>
                    <div className='text-center'>                             
                    <Button id="register" type="submit" name="Register" className="btn btn-primary-dark" />      
               </div>      
                </form>                      
                            
            </div>       
        );
    }

    const mapDispatchToProps = {
            onSignIn: creds => onSignIn(creds)
    };

export default connect(null, mapDispatchToProps)(RegisterParty);

                