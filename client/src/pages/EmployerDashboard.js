import React, {useEffect, useState} from "react";
import uuid from 'react-uuid';
import EmployerJob from "../component/EmployerJob"
import InterviewDetail from "../component/InterviewDetail";
import Navigation from '../component/Navigation';
import EmployerJobPosting from '../component/EmployerJobPosting.js'
import JobListingForm from '../component/JobListingForm'
import { Box } from "@mui/material";

function EmployerDashboard(props) {

    //const employerID = 2;
    const [employerJobListings, setJobListings] = useState([]);

    useEffect(() => {
        fetch("/employer/list2", {
            method: 'GET',
            credentials: 'include'
        }).then(res => res.json()).then(response => setJobListings(response.data))
    }, [])

    const postJobListing = (job_listing_id, company_name, job_location, job_title, job_description, job_experience, salary, image_url) => {
        fetch("/employer/add", {
            method: "POST",
            credentials: "include",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                company_name: company_name,
                job_location: job_location,
                job_title: job_title,
                job_experience: job_experience, 
                job_description: job_description,
                salary: salary,
                image_url: image_url
            })
        }).then(() => setJobListings(jobListing => [...employerJobListings,
                {
                    key: job_listing_id,
                    company_name: company_name,
                    job_location: job_location,
                    job_title: job_title,
                    job_experience: job_experience, 
                    job_description: job_description,
                    salary: salary,
                    image_url: image_url
                }]))
        }

    return  (
        <div>
            <JobListingForm postJobListing={postJobListing}/>
            <Navigation />
            <div style={{padding: 200}}>
                <h1>Your Job Listings</h1>
                {
                    employerJobListings.map(job => 
                        <EmployerJobPosting
                            job_listing_id={job.job_listing_id}
                            job_title={job.job_title}
                            job_location={job.job_location}
                            job_description={job.job_description}
                            salary={job.salary}
                            company_name={job.company_name}
                            job_experience={job.job_experience}
                            image_url={job.image_url}
                        />    
                    )
                }
            </div>
        </div>

    );
}
export default EmployerDashboard;
