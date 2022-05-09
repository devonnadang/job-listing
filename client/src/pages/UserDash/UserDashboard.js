import React, {useState, useEffect} from 'react';
import Filters from '../../component/Filters';
import Navigation from '../../component/Navigation';
import JobListing from '../../component/JobListing'
import { TextField, Slider, Box, Stack } from '@mui/material';
import styles from './UserDash.module.css'

function UserDashboard() {
    

    const [jobListings, setJobListings] = useState([]);

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
        fetch("/joblisting/all")
            .then((res) => res.json())
            .then(response => {
                setJobListings(response.data)
                setData(response.data)
            })
    }, [])


    function saveJob(jobListingID) {
        fetch("/joblisting/save", {
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jobID: jobListingID
            })
        })
    }

    function applyJob(jobListingID) {
        fetch("/joblisting/apply", {
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jobID: jobListingID
            })
        }).then(() => alert("apply job id = " + jobListingID))
    }

    const filterDefaults = {
        search: "",
        company: "",
        location: "",
        salary: 0
    }
    const [filters, setFilters] = useState(filterDefaults)

    const [data, setData] = useState([])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFilters({
            ...filters,
            [name]: value
        })
    }

    useEffect(() => {
        filterData(filters)
    }, [filters])

    const filterData = (filter) => {
        const searchLowerCase = filter.search.toLowerCase().trim();
        const companyLowerCase = filter.company.toLowerCase().trim();
        const locationLowerCase = filter.location.toLowerCase().trim();
        const filteredData = jobListings.filter(job => {
            return (job.job_title.toString().toLowerCase().includes(searchLowerCase)) 
            && (job.salary >= filter.salary) 
            && (job.company_name.toString().toLowerCase().includes(companyLowerCase)) 
            && (job.job_location.toString().toLowerCase().includes(locationLowerCase));
        })
        setData(filteredData)
    }



    return (
        <div>
            <div><Navigation /></div>
            
            <label>Dashboard</label>
            <br/><br/><br/><br/><br/><br/>
            <div>
                <Stack direction="row" justifyContent="space-around">
                    <Box width={250}>
                        <TextField
                            fullWidth
                            name="search"
                            label="Search"
                            value={filters.search}
                            onChange={handleInputChange}
                        />
                    </Box>
                    <Box width={250}>
                        <TextField
                            fullWidth
                            name="company"
                            label="Company"
                            value={filters.company}
                            onChange={handleInputChange}
                        />
                    </Box>
                    <Box width={250}>
                        <TextField
                            fullWidth
                            name="location"
                            label="Location"
                            value={filters.location}
                            onChange={handleInputChange}
                        />
                    </Box>
                    
                    <Box width={250}>
                        Minimum Salary:
                        <Slider
                            label="Salary"
                            name="salary"
                            step={10000}
                            min={0}
                            max={350000}
                            valueLabelDisplay="auto"
                            onChange={handleInputChange}
                        />
                    </Box>
                </Stack>
            </div>
            <div style={{padding: 100}}>

                {
                    data.map((job) => <JobListing
                    image_url={job.image_url}
                    company_name={job.company_name}
                    job_listing_id={job.job_listing_id}
                    job_title={job.job_title}
                    job_description={job.job_description}
                    job_experience={job.job_experience}
                    job_location={job.job_location}
                    salary={job.salary}
                    save="Save"
                    buttons={true}
                    clickApply={applyJob}
                    clickSave={saveJob}/>)
                }
            </div>

        </div>
    );
    
}

export default UserDashboard