import React from 'react';
import Filters from '../../component/Filters';
import Navigation from '../../component/Navigation';
import styles from './UserDash.module.css';

import JobListing from "../../component/JobListing";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


function UserDashboard(props){
    const [jobListing, setJobListings] = useState([]);

    useEffect(() => {
        fetch("/dashboard")
            .then((res) => res.json())
            .then(respond => {setJobListings(respond.data);})
    }, [])

    
    return (
        <div>
            <div><Navigation /></div>
            <div><Filters /></div>

            <div style={{position: 'absolute', top: 200, left: 100}}>
            <div className={styles.contents}>

            
            <h1><label>Dashboard</label></h1>
            {
                jobListing.map((jobListing) => (<JobListing 
                    job_title={jobListing.job_title} 
                    company_name={jobListing.company_id}
                    experience={jobListing.job_experience}
                    description={jobListing.job_description}
                    salary={jobListing.salary}/>))
            }
            </div>
            </div>
        </div>);
    
}


export default UserDashboard