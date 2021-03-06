import React, { useState } from 'react';
import './index.scss';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
// import toast from '../../components/Toast';



const AssignPermission =()=> {    

    const [values, setValues] = useState({
        role: '',
        permissio: ''
    });
    // const [email, setEmail] = useState('');

    const handleChange=e=>{
        setValues({
            [event.target.id]: e.target.value
        });

    };

    const handleSubmit =e=> {
        e.preventDefault();
        // this.pRegisterParty(this.state);
        console.log(values);
    };
    return (
        <div className='content'>
            <div id = 'form'>
                <form onSubmit={handleSubmit}>
                  <h5>Hi! You wanna assign a permission to an admin? Then you are a few steps away</h5>  
                    
                    <InputForm
                        classes="inputForm"
                        onChange={handleChange}
                        labelname="Permission"
                        uniqueId="permission"
                        labelClass="Label"
                        inputType="text"
                        inputClass="Input"
                        placeholder="Permission"
                        // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                        // title="Email is required and must be more than 3 character"
                        /> 

                    <InputForm
                        classes="inputForm"
                        onChange={handleChange}
                        labelname="Role"
                        uniqueId="role"
                        labelClass="Label"
                        inputType="text"
                        inputClass="Input"
                        placeholder="Role"
                        // pattern="^[\w]{8,20}$"
                        // title="Password is required and must be more than 8 character"
                    /> 
                    <Button id="register" type="submit" name="Register" classes="btn" />       
              </form>
            </div>
        </div>
    );
};

export default AssignPermission;
