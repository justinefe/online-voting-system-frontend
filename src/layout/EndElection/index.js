import React, { useState } from 'react';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import './index.scss';


const EndElection = () => {    

    const [values, setValues] = useState({
        election: '',
        date: new Date});

    const handleChange = e => {
        setValues({
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
    };

    return (
            <div className ="content">
                <div id = 'form'>
                  <form onSubmit={handleSubmit} >
                    <h5>Enter the election name and start the election
                        </h5>  
                       
                        <InputForm
                            classes="inputForm"
                            onChange={handleChange}
                            labelname="Election name"
                            uniqueId="election"
                            labelClass="Label"
                            inputType="text"
                            inputClass="Input"
                            placeholder="Election name"
                            // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                            // title="Email is required and must be more than 3 character"
                        /> 
                        <InputForm
                            classes="inputForm"
                            onChange={handleChange}
                            labelname="Stopage time"
                            uniqueId="election"
                            labelClass="Label"
                            inputType="date"
                            inputClass="Input"
                            placeholder="Stopage time"
                            // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                            // title="Email is required and must be more than 3 character"
                        />
                    <Button id="register" type="submit" name="Start the election" classes="btn" /> 
                 </form>    
              </div>    
        </div> 
        );
    };

export default EndElection;

                