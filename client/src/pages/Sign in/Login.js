import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import Axios from 'axios';

function Login() {
    const [email_login, setEmail] = useState("");
    const [password_login, setPassword] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            email : email_login,
            password : password_login,
        }).then((res) => {
            console.log(res);
        });
    };


    return (
        <div>
            <h1 className={styles.pageTitle}>Job Listings</h1>
            <h3 className={styles.createAccountMessage}>Don't have an account? <Link to="/CreateAccount">Sign Up</Link></h3>
            <div className={styles.square}>
                <h2 className={styles.subTitle}>Sign In</h2>

               <input className={styles.Email} name='email' type='email' placeholder='Email'
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                <input className={styles.Password} name='password' type='password' placeholder='Password'
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>

                <button onClick={login} className={styles.loginButton} type="submit" >Sign In</button>
            </div>
        </div>);
}

export default Login