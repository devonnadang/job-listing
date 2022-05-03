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

    function unsaveJob(jobListingID) {
        fetch("/joblisting/unsave", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: userID,
                jobID: jobListingID
            })
        }).then(() => alert("unsave job id = " + jobListingID + " from account id " + userID))
        .then(() => setSavedJobs(savedJobs.filter(item => item.job_listing_id !== jobListingID)))
        
    }

    function applyJob(jobListingID) {
        fetch("/joblisting/apply", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: userID,
                jobID: jobListingID
            })
        }).then(() => alert("apply job id = " + jobListingID + " to account id " + userID))
    }

    return (
        <div>
            <Navigation />
            <label>Saved</label>
            <div style={{padding:100}}>
            {
                savedJobs.map((job) => (<JobListing
                    image_url={job.image_url}
                    company_name={job.company_name}
                    job_listing_id={job.job_listing_id}
                    job_title={job.job_title}
                    company_id={job.company_id}
                    job_description={job.job_description}
                    job_experience={job.job_experience}
                    salary={job.salary}
                    save="Unsave"
                    buttons={true}
                    clickApply={applyJob}
                    clickSave={unsaveJob}
                    />))
            }
            </div>
            
        </div>
        );
}

export default Saved