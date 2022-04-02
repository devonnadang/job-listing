import React from 'react';
import Filters from '../../component/Filters';
import Navigation from '../../component/Navigation';
import styles from './UserDash.module.css'

class UserDashboard extends React.Component{
    render(){
        return (
        <div>
            <div><Navigation /></div>
            <div><Filters /></div>
            <label>Dashboard</label>
        </div>);
    }
}

export default UserDashboard