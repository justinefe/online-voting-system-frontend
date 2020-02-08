import React, { Component } from 'react';

export default class signIn extends Component {
   constructor(){
       super();
       this.state = {
           email: null,
           password: null
       };
   }
   
    handleChange(e){
        this.setState({
            [event.target.id]: e.target.value
        });
    }
    handleSubmit(){
    }
    render() {
        return (
            <div className="form-container">
                <form className='form-body' onSubmit={this.handleSubmit.bind(this)}>
                    <h5>Sign in</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="input-field">
                        <button className='login-button'>Login</button>
                    </div>
                </form>                
            </div>
        );
    }
}

