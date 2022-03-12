import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './CreateAccount.module.css';


class CreateAccount extends React.Component{
        render () {return (
        <div>
            <h1 className={styles.pageTitle}>job finder</h1>
            <h3 className={styles.signInMessage}>Already have an account? <Link to="/" style={{textDecoration: 'none'}}>Sign in</Link></h3>
            <div className={styles.square}>
            <h2 className={styles.subTitle}>create an account</h2>
                <LoginForm />
            </div>
        </div>);
        }
}

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleUserInput (e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleSubmit (e){
        alert(
            "firstName: " + this.state.firstName + 
            "\nlastName: " + this.state.lastName +
            "\nemail: " + this.state.email +
            "\npassword: " + this.state.password);
        this.setState({redirect: true})
    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/Dashboard" />
        }      
        return (           
            <form onSubmit={this.handleSubmit}>
                <input 
                className={styles.FirstName} 
                name="firstName"
                type="text"
                value={this.state.firstName}
                placeholder="First Name"
                onChange={
                    (event) => this.handleUserInput(event)} />
                <input 
                className={styles.LastName} 
                name="lastName"
                type="text"
                value={this.state.lastName}
                placeholder="Last Name"
                onChange={
                    (event) => this.handleUserInput(event)} />
                <input 
                className={styles.Email} 
                name="email"
                type="email"
                value={this.state.email}
                placeholder="Email"
                onChange={
                    (event) => this.handleUserInput(event)} />
                <input 
                className={styles.Password} 
                name="password"
                type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={
                    (event) => this.handleUserInput(event)} />
                <button 
                className={styles.submit} 
                type="submit" >Sign Up</button>
            </form>
        );
    }
}

export default CreateAccount

