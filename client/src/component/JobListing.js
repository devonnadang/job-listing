import React, {useState, useEffect} from "react"; 
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from './JobListing.module.css';
import JobTag from './JobTag'
import Avatar from '@mui/material/Avatar';


function JobListing(props) {

 

    const [jobTags, setJobTags] = useState([])

    useEffect(() => {
        fetch("joblisting/tags/" + props.job_listing_id)
        .then((res) => res.json())
        .then(response => setJobTags(response))
    }, []);

    let applyButton, saveButton;
    if (props.buttons) {
        applyButton = <Button variant="outlined" onClick={() => {props.clickApply(props.job_listing_id)}}>Apply</Button>
        saveButton = <Button variant="outlined" onClick={() => {props.clickSave(props.job_listing_id)}}>{props.save}</Button>
    }

    return (
        <div className={styles.padding}>
        <div className={styles.border}>
            <Avatar src={props.image_url} sx={{width:50, height: 50}}></Avatar>
            <p className={styles.JobTitle}> {props.job_title} </p>
            <p> {props.company_name}, {props.job_location} </p>
            <p> Description: {props.job_description} </p>
            <p> Experience: {props.job_experience} </p>
            <p> Salary: {props.salary} </p>
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={1}>
                    {
                        jobTags.map((tag) => <JobTag
                            job_listing_id={tag.job_listing_id}
                            name={tag.job_type_name}
                        />)
                    }
                </Stack>
                <br></br>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    {applyButton}{saveButton}
                </Stack>
            </Stack>
            <br></br>
        </div>
        </div>
    );
}

export default JobListing;