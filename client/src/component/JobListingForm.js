import React, {useState} from "react"; 
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import uuid from "react-uuid";



function JobListingForm(props) {
    const[values, setValues] = useState({
        job_listing_id: uuid(),
        company_name: "",
        job_title: "",
        job_location: "",
        job_experience: "",
        salary: "",
        job_description: "",
    });

    const handleCompanyNameInputChange = (event) => {
        setValues({...values, company_name: event.target.value});
    }

    const handleJobTitleInputChange = (event) => {
        setValues({...values, job_title: event.target.value});
    }
    const handleJobLocationInputChange = (event) => {
        setValues({...values, job_location: event.target.value});
    }
    const handleJobExperienceInputChange = (event) => {
        setValues({...values, job_experience: event.target.value});
    }
    const handleSalaryInputChange = (event) => {
        setValues({...values, salary: event.target.value});
    }
    const handleJobDescriptionInputChange = (event) => {
        setValues({...values, job_description: event.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values.job_listing_id + " " + values.company_name + " " + values.job_title + " " + values.job_location + " " + values.job_experience + " " + values.salary + " " + values.job_description);
    }

    return(
        <div style={{position: 'relative', top: 150, left: 200}}>
            <form onSubmit={handleSubmit}>
                     <TextField variant="outlined" 
                        label="Company Name"
                        type="text" 
                        id="companyName" 
                        name="companyname" 
                        size="small"
                        value={values.company_name}
                        onChange={handleCompanyNameInputChange} 
                    />
                    <br></br> <br></br>
                <Stack direction="row" spacing={5}>
                    <TextField variant="outlined" 
                        label="Job Title"
                        type="text" 
                        id="jobTitle" 
                        name="jobTitle" 
                        size="small"
                        value={values.job_title}
                        onChange={handleJobTitleInputChange} 
                    />
                    <TextField variant="outlined" 
                        label="Location"
                        type="text" 
                        id="jobLocation" 
                        name="jobLocation" 
                        size="small"
                        value={values.job_location}
                        onChange={handleJobLocationInputChange} 
                    />
                    <TextField variant="outlined" 
                        label="Experience"
                        type="text" 
                        id="jobExperience" 
                        name="jobExperience" 
                        size="small"
                        value={values.job_experience}
                        onChange={handleJobExperienceInputChange} 
                    />
                    <TextField variant="outlined" 
                        label="Salary"
                        type="text" 
                        id="salary" 
                        name="salary" 
                        size="small"
                        value={values.salary}
                        onChange={handleSalaryInputChange} 
                    />
                </Stack>
                <br></br><br></br>
                <TextField 
                    id="description"
                    label="Description"
                    name="description"
                    multiline
                    rows={5}
                    sx={{ width: 500 }}
                    value={values.job_description}
                    onChange={handleJobDescriptionInputChange}
                />
                <br></br><br></br>
                <Button type="submit" variant="contained"> Post Job Listing </Button>
            </form>
        </div>
    );
}

export default JobListingForm; 