import React, { Component } from 'react';

export default class signUp extends Component {
   constructor(){
       super();
       this.state = {
           email: '',
           password: '',
           firstName: '',
           lastName: ''
       };
   }
   
    handleChange(e){
        this.setState({
            [event.target.id]: e.target.value
        });
    }
    handleSubmit(){
        // console.log(e);
    }
    render() {
        return (
            <div className="form-container">
                <form className='form-body' onSubmit={this.handleSubmit.bind(this)}>
                    <h5>Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" id='firstName' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" id='lastName' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <button className='login-button'>Sign Up</button>
                    </div>
                </form>                
            </div>
        );
    }
}

