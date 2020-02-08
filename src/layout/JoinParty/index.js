import React, { useState } from 'react';
import { connect } from 'react-redux';
import { onSignInAction} from '../../store/actions/AuthActions.js';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';
// import toast from '../../components/Toast';
import './index.scss';


const JoinParty = ()=> {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        // toast('Kindly login', 'error');
        setValue({
            [event.target.id]: e.target.value
        });
 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // this.pJoinParty(this.state);
        console.log(value);
    };

    return (
            <div className='container'>
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                <h5>Hi! You wanna join a party? Then you are a few steps away</h5>
                    <hr></hr>
                        <form onSubmit={handleSubmit}>
                           <div className='form-group'>                            
                                <Label labelname="Name of Party" uniqueId="first_name"                              
                                />
                                <Input
                                // classes="inputForm"
                                onChange={handleChange}
                                labelname="Name of party"
                                uniqueId="first_name"
                                // labelClass="Label"
                                inputType="text"
                                classes="form-control"
                                placeholder="People Democratic Party"
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
};

    const mapDispatchToProps = {
            onSignIn: creds => onSignInAction(creds)
     }

 
export default connect(null, mapDispatchToProps)(JoinParty);

                