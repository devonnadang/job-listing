import React, { useEffect, useRef } from 'react';
import styles from './Login.css';

function Login (){
        return (<div>
        <div className='login-page'></div>
            <h1 className='page-title'>job finder</h1>
            <h2 className='sub-title'>Sign In</h2>
            <h3 className='create-account-message'>Dont have an account? Sign up</h3>
            <temp></temp>
            <ul>
                <div className='username' style={{position: 'absolute', top: 399, left: 481}}>
                    <TextInput value={'Email'} />
                </div>
                <div className='password' style={{position: 'absolute', top: 491, left: 481}}>
                    <TextInput value={'Password'}/>
                </div>
                <div className='login-button' style={{position: 'absolute', top: 614, left: 481}}>
                    <LoginButton value={'Sign up'} />
                </div>
            </ul>
        </div>);
}

class TextInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) { this.setState({value: event.target.value}); }

    render() {
        return (
            <input type="text" placeholder={this.props.value} value={this.state.value} onChange={this.handleChange} />
        );
    }
}

class LoginButton extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <button className='login' onClick={this.loginClicked}> 
                {this.props.value}
            </button>
        );
    }

    loginClicked() {
        alert("Click!");
    }
}

export default Login