import React, {useState, useEffect} from "react"; 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from './JobListing.module.css';


function JobListing(props) {

    const [company, setCompany] = useState([])

    useEffect(() => {
        fetch("/company/" + props.company_id)
            .then((res) => res.json())
            .then(response => setCompany(response.data[0]))
    }, []);

    return (
        <div>
            <p className={styles.JobTitle}> {props.job_title} </p>
            <p> {company.company_name} </p>
            <p> Description: {props.job_description} </p>
            <p> Experience: {props.job_experience} </p>
            <p> Salary: {props.salary} </p>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" onClick={() => {alert("clicked apply")}}>Apply</Button>
                <Button variant="outlined" onClick={() => {alert('clicked unsave')}}>Save</Button>
            </Stack>
            <br></br>
        </div>
    );
}

export default JobListing;