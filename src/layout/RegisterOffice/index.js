import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onSignInAction } from '../../store/actions/AuthActions.js';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import toast from '../../components/Toast';
import './index.scss';


class RegisterOffice extends Component{
    constructor(){
        super();
        this.state = {
            officeName: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        toast('Kindly login', 'error');
        this.setState({
            [event.target.id]: e.target.value
        });

    }

    handleSubmit(e){
        e.preventDefault();
        // this.pRegisterOffice(this.state);
        console.log(this.state);
    }

    render(){  
    return (
            <div className ="content">
                <div id = 'form'>
                  <form onSubmit={this.handleSubmit}>
                    <h5>Hi! You wanna register an office for people to contest an election? Then you are a one step close</h5>  
                       
                        <InputForm
                            classes="inputForm"
                            onChange={this.handleChange}
                            labelname="Office name"
                            uniqueId="officeName"
                            labelClass="Label"
                            inputType="text"
                            inputClass="Input"
                            placeholder="Office name"
                            // pattern="/^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/"
                            // title="Email is required and must be more than 3 character"
                            />   
                        <Button id="register" type="submit" name="Register" classes="btn" />       
                        </form>  
                </div>
                            
            </div>       
        );
     }
    }

    const mapDispatchToProps = dispatch => {
        return {
            onSignInAction: creds => {dispatch(onSignInAction(creds));}
        };
    };

export default connect(null, mapDispatchToProps)(RegisterOffice);

                