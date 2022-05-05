import React, { useState } from "react";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './CreateAccount.module.css';

function CreateAccount() {
    const [firstNameReg, setFirstName] = useState("");
    const [lastNameReg, setLastName] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            FirstName : firstNameReg,
            LastName : lastNameReg,
            email : emailReg, 
            password : passwordReg,
        }).then((res) => {
            console.log(res);
        });
    };


    return (
        <div>
            <h1 className={styles.pageTitle}>Job Listings</h1>
            <h3 className={styles.signInMessage}>Already have an account? <Link to="/Login">Sign in</Link></h3>
            <div className={styles.square}>
                <h2 className={styles.subTitle}>Create an account</h2>
                <input className={styles.FirstName} name='FirstName' placeholder='First Name'
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}/>

                <input className={styles.LastName} name='LastName' placeholder='Last Name'
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}/>
                
                <input className={styles.Email} name="email" type="text" placeholder="Email"
                    onChange={(e) => {
                        setEmailReg(e.target.value);
                    }}/>
                <input className={styles.Password} name="password" type="password" placeholder="Password"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}/>
                <button onClick={register} className={styles.submit} type="submit">Sign Up</button>
            </div>
        </div>);
}

export default CreateAccount