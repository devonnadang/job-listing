import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
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
    render(){      
        return (           
        <Formik 
            initialValues={{ firstName: '', lastName: '', email: '', password: ''}}
            onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}>
            <Form>
              <Field className={styles.FirstName} name="firstName" type="text"  placeholder="First Name"/>
              <Field className={styles.LastName} name="lastName" type="text" placeholder="Last Name"/>
              <Field className={styles.Email} name="email" type="email" placeholder="Email"/>
              <Field className={styles.Password} name="password" type="password" placeholder="Password"/>
              <button className={styles.submit} type="submit">Sign up</button>
            </Form>
      </Formik>
        );
    }
}

export default CreateAccount