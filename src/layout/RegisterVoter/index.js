import React, { useState } from 'react';
import { connect } from 'react-redux';
import { onSignInAction } from '../../store/actions/AuthActions.js';
// import InputForm from '../../components/InputForm';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
import toast from '../../components/Toast';
import './index.scss';


const RegisterVoter = () => {
 const [ values, setValues ] = useState({
            country: '',
            state: '',
            gender:'',
            residentialAddress:'',
            dateOfBirth: '',
            city:''
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
                  <form onSubmit={handleSubmit}>
                    <h5 className='heading'>Hi! You wanna register as a candidate to contest an election? Then you are a few steps away</h5>  
                    <div className='form-group'>                            
                    <Label labelname="Country" uniqueId="country"                           
                    />
                    <Input
                    onChange={handleChange}
                    // uniqueId="partyName"
                    uniqueId="country"
                    inputType="text"
                    classes="form-control"
                    placeholder="Nigeria"
                    // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                    // title="Email is required and must be more than 3 character"
                    />  
                    </div>
                      
                    <div className='form-group'>                            
                    <Label labelname="State" uniqueId="state"                           
                    />
                    <Input
                    onChange={handleChange}
                    // uniqueId="partyName"
                    uniqueId="state"
                    inputType="text"
                    classes="form-control"
                    placeholder="Delta"
                    // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                    // title="Email is required and must be more than 3 character"
                    />  
                    </div>
                    <div className='form-group'>                            
                    <Label labelname="Residential Address" uniqueId="residentialAddress"                           
                    />
                    <Input
                    onChange={handleChange}
                    // uniqueId="partyName"
                    uniqueId="residentialAddress"
                    inputType="text"
                    classes="form-control"
                    placeholder="15 james street london"
                    // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                    // title="Email is required and must be more than 3 character"
                    />  
                    </div>
                        <div className='form-group'>                  
                            <Label labelname="Gender" uniqueId="gender"/>
                            <select uniqueId='gender'>
                                <option>Choose</option>
                                <option>male</option>
                                <option>female</option>
                            </select>
                        </div>
                        <div className='form-group'>                            
                        <Label labelname="Date of birth" uniqueId="dateOFBirth"                           
                        />
                        <Input
                        onChange={handleChange}
                        // uniqueId="partyName"
                        uniqueId="dateOfBirth"
                        inputType="date"
                        classes="form-control"
                        // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                        // title="Email is required and must be more than 3 character"
                        />  
                        </div>
                        <div className='form-group'>                            
                        <Label labelname="City" uniqueId="city"                           
                        />
                        <Input
                        onChange={handleChange}
                        // uniqueId="partyName"
                        uniqueId="city"
                        inputType="text"
                        classes="form-control"
                        placeholder="City"  
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

    const mapDispatchToProps = dispatch => {
        return {
            onSignInAction: creds => {dispatch(onSignInAction(creds));}
        };
    };

export default connect(null, mapDispatchToProps)(RegisterVoter);

                