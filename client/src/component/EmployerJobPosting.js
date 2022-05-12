import React, {useEffect, useState} from "react";
import { Avatar, Button, Stack } from "@mui/material";
import ListProfile from './ListProfile'
import uuid from 'react-uuid';

import EmployerJob from "./EmployerJob"
import styles from '../pages/UserProfile.module.css';

function EmployerJobPosting(props) {

    const [view, setView] = useState(false)

    function toggleView() {
        setView(view => !view)
    }

    const [applicants, setApplicants] = useState([])

    useEffect(() => {
        fetch("/employer/list/" + props.job_listing_id)
            .then(res => res.json())
            .then(response => setApplicants(response.data))
    }, [])

    let comps;
    if (view) {
        comps = 
            <div>
                <h3>Applicants</h3>
                {
                    applicants.map(app => <ListProfile
                        user_account_id={app.user_account_id}
                        first_name={app.first_name}
                        last_name={app.last_name}
                        image_url={app.image_url}
                    />)
                }
            </div>
    } else {
        comps = <br></br>
    }

    return  (
        <div>
            <Stack direction="row" spacing={2} alignItems='center'>
                <Avatar src={props.image_url}/>
                <p>{props.job_title}</p>
            </Stack>
            
            <p>{props.company_name} | {props.job_location}</p>
            <p>Description: {props.job_description}</p>
            <p>Experience: {props.job_experience}</p>
            <p>Salary: {props.salary}</p>
            <Button onClick={toggleView} variant="outlined">View Details</Button>
            {comps}
            <br></br>
        </div>

    );
}

export default EmployerJobPosting;
