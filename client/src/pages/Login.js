import React, { useEffect, useRef } from 'react';
import styles from './Login.css';

class Login extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                field1: String = "Test",
                field2: String = null
            };
        }

        render () {return (
        <div>
        <div className='login-page'></div>
            <h1 className='page-title'>job finder</h1>
            <h3 className='create-account-message'>Dont have an account? Sign up</h3>
            <div className='square'>
            <h2 className='sub-title'>Sign In</h2>
                <LoginForm />
            </div>
        </div>);
        }
}

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            field1: '',
            field2: ''};
        this.handleChangeField1 = this.handleChangeField1.bind(this);
        this.handleChangeField2 = this.handleChangeField2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeField1(event){
        this.setState({
            field1: event.target.value
        });
    }

    handleChangeField2(event){
        this.setState({
            field2: event.target.value
        });
    }

    handleSubmit(event){
        alert("field1: " + this.state.field1 + "\nfield2: " + this.state.field2)
        event.preventDefault();
    }

    render(){
        return (   
        <form onSubmit={this.handleSubmit}>           
            <div style={{position: 'absolute', top: 122, left: 46}}>
                <input className="Email" type="text" value={this.state.field1} onChange={this.handleChangeField1} placeholder={"Email"}/>
            </div>
            <div style={{position: 'absolute', top: 214, left: 46}}>
                <input className="Password" type="text" value={this.state.field2} onChange={this.handleChangeField2} placeholder={"Password"}/>
            </div>
            <div>
                <input className='login-button' type="submit" value={'Sign up'} name={'login-button'}/>
            </div>
        </form>  );
    }
}

export default Login