import React, { useState, useEffect } from 'react';
import Navigation from '../component/Navigation';
import JobListing from '../component/JobListing';

function Saved() {

    const userID = 1

    const [savedJobs, setSavedJobs] = useState([]);


    useEffect(() => {
        fetch("/saved/" + userID)
            .then((res) => res.json())
            .then(response => setSavedJobs(response.data))
    }, []);

    return (
        <div>
            <Navigation />
            <label>Saved</label>
            <div style={{padding:100}}>
            {
                savedJobs.map((job) => (<JobListing
                    job_title={job.job_title}
                    company_id={job.company_id}
                    job_description={job.job_description}
                    job_experience={job.job_experience}
                    salary={job.salary}
                    />))
            }
            </div>
            
        </div>
        );
}

export default Saved