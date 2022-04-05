import React from 'react';
import {
  Link
} from "react-router-dom";
import Navbar from '../component/Navbar';
import UserDashboard from './UserDashboard';
import styles from './Navigation.module.css'


const Navigation = () => {
    return(
        <div className='navigation'>
            <Link className='Create Account' to="/CreateAccount">Create Account</Link>
            <Link className={styles.dashLink} to="/EmployerDashboard">Jobs</Link>
            <Link className={styles.messageLink} to="/Messages">Messages</Link>
            <Link className={styles.appliedLink} to="/Applied">Applied</Link>
            <Link className={styles.savedLink} to="/Saved">Saved</Link>
            <Link className={styles.profileLink} to="/UserProfile">Profile</Link>
        </div>

    )
}


export default Navigation;