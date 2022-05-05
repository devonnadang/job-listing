import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import Axios from 'axios';

function Login() {
    const [email_login, setEmail] = useState("");
    const [password_login, setPassword] = useState("");

    const[loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true; // needed for sessions

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            email : email_login,
            password : password_login,
        }).then((response) => {

            if(response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                // accessing id
                //setLoginStatus("Welcome " + response.data[0].FirstName + "id: " + response.data[0].id_Users)
                setLoginStatus("Welcome " + response.data[0].FirstName);
            }
        });
    };

    // whenever we refresh page we check if logged in -> 'get'
    useEffect(()=> {
        Axios.get("http://localhost:3001/login").then((response) => {
            //console.log(response); // console logs user data to front end 
            if(response.data.loggedIn == true) {
                setLoginStatus("Welcome " + response.data.user[0].FirstName);
            }
            
        });
    }, []);

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
            <h1>{loginStatus}</h1>
        </div>);
}

export default Login