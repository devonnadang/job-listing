import React, {useEffect, useState} from "react";
import uuid from 'react-uuid';
import EduDetail from "../component/EduDetail";
import ExpDetail from "../component/ExpDetail";
import EmployerJob from "../component/EmployerJob"
import InterviewDetail from "../component/InterviewDetail";
import SkillTag from "../component/SkillTag";
import Stack from '@mui/material/Stack';
import Navigation from '../component/Navigation';
import { StylesContext } from "@material-ui/styles";
import styles from './UserProfile.module.css';
import EmployerJobPosting from '../component/EmployerJobPosting.js'
import Button from '@mui/material/Button';
import JobListingForm from '../component/JobListingForm'

function EmployerDashboard(props) {

    const employerID = 2;
    const [employerJobListings, setJobListings] = useState([]);


    async function getEmployerJobListings() {
        let response = await fetch("/employer/list2/" + employerID);
        console.log(response.status); //200
        console.log(response.statusText); //OK

        if (response.status == 200) {
            const employerJobListingData = await response.json();
            console.log(employerJobListingData);
            return employerJobListingData.data;
        } else {
            console.log("error getting employer job listing");
        }
    }

    useEffect(() => {
        getEmployerJobListings()
            .then(result => {
                setJobListings(result);
            })
            .catch(() => []);
    }, [])

    const postJobListing = (job_listing_id, company_name, job_location, job_title, job_description, job_experience, salary) => {
        fetch("/employer/add", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                job_listing_id: job_listing_id,
                posted_by_id: {employerID},
                company_name: company_name,
                job_location: job_location,
                job_title: job_title,
                job_experience: job_experience, 
                job_description: job_description,
                salary: salary
            })
        }).then(() => setJobListings(jobListing => [...employerJobListings,
                {
                    key: job_listing_id,
                    posted_by_id: {employerID},
                    company_name: company_name,
                    job_location: job_location,
                    job_title: job_title,
                    job_experience: job_experience, 
                    job_description: job_description,
                    salary: salary
                }]))
        }

    return  (
        <div>
            <JobListingForm postJobListing={postJobListing}/>
            <Navigation />
            <EmployerJobPosting employerID={employerID} jobListings = {employerJobListings}/>
        </div>

    );
}
export default EmployerDashboard;

