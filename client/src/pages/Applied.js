import React, { useState, useEffect } from 'react';
import Navigation from '../component/Navigation';
import JobListing from '../component/JobListing';

const Applied = () =>{

    const userID = 1

    const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(() => {
        fetch("/applied/" + userID)
            .then((res) => res.json())
            .then(response => setAppliedJobs(response))
    }, []);

    return (
        <div>
            <Navigation />
            <label>Applied</label>
            <div style={{padding: 100}}>
            {
                appliedJobs.map((job) => (<JobListing
                    job_listing_id={job.job_listing_id}
                    job_title={job.job_title}
                    company_id={job.company_id}
                    job_description={job.job_description}
                    job_experience={job.job_experience}
                    salary={job.salary}
                    buttons={false}
                    />))
            }
            </div>
        </div>);
}

export default Applied