import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';


class Login extends React.Component{
        render () {return (
        <div>
            <h1 className={styles.pageTitle}>job finder</h1>
            <h3 className={styles.createAccountMessage}>Dont have an account? <Link to="/CreateAccount" style={{textDecoration: 'none'}}>Sign up</Link></h3>
            <div className={styles.square}>
            <h2 className={styles.subTitle}>Sign In</h2>
                <LoginForm />
            </div>
        </div>);
        }
}

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput (e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event){
        alert("email: " + this.state.email + "\npassword: " + this.state.password);
        this.setState({redirect: true});
    } 

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/Dashboard" />;
        }        
        return (   
        <form onSubmit={this.handleSubmit}>           
            <input 
            className={styles.Email} 
            name="email"
            type="email" 
            value={this.state.field1} 
            placeholder="Email"
            onChange={
                (event) => this.handleUserInput(event)}/>
            <input 
            className={styles.Password} 
            name="password"
            type="password" 
            value={this.state.field2} 
            placeholder="Password"
            onChange={
                (event) => this.handleUserInput(event)}/>
            <button 
            type="submit" 
            className={styles.loginButton}>Sign in</button>
        </form>  );
    }
}

export default Login