import React from 'react';
import { Redirect } from 'react-router';
import './Login.css';


class Login extends React.Component{
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
        if (this.state.field1.match("hello"))
            this.setState({redirect: true});
    } 

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/Dashboard" />;
        }        
        return (   
        <form onSubmit={this.handleSubmit}>           
            <div style={{position: 'absolute', top: 122, left: 46}}>
                <input className="Email" type="text" value={this.state.field1} onChange={this.handleChangeField1} placeholder={"Email"}/>
            </div>
            <div style={{position: 'absolute', top: 214, left: 46}}>
                <input className="Password" type="text" value={this.state.field2} onChange={this.handleChangeField2} placeholder={"Password"}/>
            </div>
            <div>
                <button type="submit" className='login-button'>Sign in</button>
            </div>
        </form>  );
    }
}

export default Login