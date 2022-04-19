import React, {useState, useEffect} from 'react';
import Filters from '../../component/Filters';
import Navigation from '../../component/Navigation';
import JobListing from '../../component/JobListing'
import styles from './UserDash.module.css'

function UserDashboard() {
    
    const [jobListings, setJobListings] = useState([])

    useEffect(() => {
        fetch("/dashboard")
            .then((res) => res.json())
            .then(response => setJobListings(response.data))
    }, [])

    return (
        <div>
            <div><Navigation /></div>
            <div><Filters /></div>
            <label>Dashboard</label>
            <br></br><br></br><br></br>
            <div style={{padding: 100}}>
                
                {
                    jobListings.map((job) => <JobListing
                    job_title={job.job_title}
                    company_id={job.company_id}
                    job_description={job.job_description}
                    job_experience={job.job_experience}
                    salary={job.salary}/>)
                }
            </div>

        </div>
    );
    
}

export default UserDashboard