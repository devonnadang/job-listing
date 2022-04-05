import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './CreateAccount.module.css';
import Login from '../Login'

/*
const CreateAccount  = () => {
    return(
        <div className='CreateAccount'>
            <h1>Create new account</h1>
        </div>
    )
}

export default CreateAccount
*/



class CreateAccount extends React.Component{
        render () {return (
        <div>
            <h1 className={styles.pageTitle}>job finder</h1>
            <h3 className={styles.signInMessage}>Already have an account? <Link to="/Login">Sign in</Link></h3>
            <div className={styles.square}>
            <h2 className={styles.subTitle}>create an account</h2>
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
            field2: '',
            field3: '',
            field4: ''};
        this.handleChangeField1 = this.handleChangeField1.bind(this);
        this.handleChangeField2 = this.handleChangeField2.bind(this);
        this.handleChangeField3 = this.handleChangeField3.bind(this);
        this.handleChangeField4 = this.handleChangeField4.bind(this);
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

    handleChangeField3(event){
        this.setState({
            field3: event.target.value
        });
    }

    handleChangeField4(event){
        this.setState({
            field4: event.target.value
        });
    }

    handleSubmit(event){
        alert("field1: " + this.state.field1 + 
        "\nfield2: " + this.state.field2 +
        "\nfield3: " + this.state.field3 +
        "\nfield4: " + this.state.field4)
        event.preventDefault();
        if (this.state.field1.match("hello"))
            this.setState({redirect: true});
    } 

    render(){     
        return (   
        <form onSubmit={this.handleSubmit}>           
            <div style={{position: 'absolute', top: 95, left: 46}}>
                <input className={styles.FirstName} type="text" value={this.state.field3} onChange={this.handleChangeField3} placeholder={"First name"}/>
            </div>
            <div style={{position: 'absolute', top: 95, left: 335}}>
                <input className={styles.LastName} type="text" value={this.state.field4} onChange={this.handleChangeField4} placeholder={"Last name"}/>
            </div>           
            <div style={{position: 'absolute', top: 203, left: 46}}>
                <input className={styles.Email} type="text" value={this.state.field1} onChange={this.handleChangeField1} placeholder={"Email"}/>
            </div>
            <div style={{position: 'absolute', top: 311, left: 46}}>
                <input className={styles.Password} type="text" value={this.state.field2} onChange={this.handleChangeField2} placeholder={"Password"}/>
            </div>
            <div>
                <button type="submit" className={styles.submit}>Sign up</button>
            </div>
        </form>  );
    }
}

export default CreateAccount


