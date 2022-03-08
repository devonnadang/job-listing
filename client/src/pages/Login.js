import React, { useEffect, useRef } from 'react';
import styles from './Login.css';

class Login extends React.Component{
        render () {return (<div>
        <div className='login-page'></div>
            <h1 className='page-title'>job finder</h1>
            <h3 className='create-account-message'>Dont have an account? Sign up</h3>
            <div className='square'>
            <h2 className='sub-title'>Sign In</h2>
                <div style={{position: 'absolute', top: 122, left: 46}}>
                    <TextInput value={'Email'} />
                </div>
                <div style={{position: 'absolute', top: 214, left: 46}}>
                    <TextInput value={'Password'}/>
                </div>
                <button className='login-button'>
                    <LoginButton value={'Sign up'} name={'login-button'}/>
                </button>
            </div>
        </div>);
        }
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
            <input className={this.props.value} type="text" placeholder={this.props.value} value={this.state.value} onChange={this.handleChange} />
        );
    }
}

class LoginButton extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={this.props.name} onClick={this.loginClicked}> 
                {this.props.value}
            </div>
        );
    }

    loginClicked() {
        alert("Click!");
    }
}

export default Login