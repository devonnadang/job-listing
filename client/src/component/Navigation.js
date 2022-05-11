import React from 'react';
import {
  Link
} from "react-router-dom";
import styles from './Navigation.module.css'

class Navigation extends React.Component{
    render() {
        return(
            <div className={styles.navGroup}>
            <label className={styles.title}>job finder</label>
                <Link className={styles.dashLink} to="/Dashboard">Jobs</Link>
                <Link className={styles.messageLink} to="/Network">Network</Link>
                <Link className={styles.appliedLink} to="/Applied">Applied</Link>
                <Link className={styles.savedLink} to="/Saved">Saved</Link>
                <Link className={styles.profileLink} to="/UserProf">Profile</Link>
            </div>
        );
    }
}

export default Navigation;