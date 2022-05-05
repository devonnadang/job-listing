import React, {useState, useEffect} from 'react';
import Filters from '../../component/Filters';
import Navigation from '../../component/Navigation';
import JobListing from '../../component/JobListing'
import styles from './UserDash.module.css'

function UserDashboard() {
    
    const userID = 1;

    const [jobListings, setJobListings] = useState([]);
    const [filteredData, setFilteredDate] = useState([]);

    // useEffect(() => {
    //     fetch("/joblisting/all")
    //         .then((res) => res.json())
    //         .then(response => setJobListings(response.data))
    // }, [])

    async function getJobListings() {
        let response = await fetch("/joblisting/all");
        console.log(response.status); //200
        console.log(response.statusText); //0K

        if (response.status == 200) {
            const jobListingData = await response.json();
            console.log(jobListingData);
            return jobListingData.data;
        } else {
            console.log("error getting job listings");
        }
    }

    //runs once to display job listings already in the database
    useEffect(() => {
        getJobListings()
            .then(result => {
                setJobListings(result);
            })
            .catch(() => []);
    }, []);


    function saveJob(jobListingID) {
        fetch("/joblisting/save", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: userID,
                jobID: jobListingID
            })
        }).then(() => alert("save job id = " + jobListingID + " from account id " + userID))
    }

    return (
        <div>
            <div><Navigation /></div>
            <div><Filters /></div>
            <label>Dashboard</label>
            <br></br><br></br><br></br>
            <div style={{padding: 120}}>
                {
                    jobListings.map((job) => <JobListing
                    job_listing_id={job.job_listing_id}
                    job_title={job.job_title}
                    company_id={job.company_id}
                    job_description={job.job_description}
                    job_experience={job.job_experience}
                    salary={job.salary}
                    save="Save"
                    clickSave={saveJob}/>)
                }
            </div>

        </div>
    );
    
}

export default UserDashboard