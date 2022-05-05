import React, {useEffect, useState}  from "react"; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function AddExp(props) {
    const [form, setForm] = useState(false);

    function ExpForm(props) {

        const [values, setValues] = useState({
            job_title: "",
            start_date: "",
            end_date: "",
            company_name: "",
            description: "",
            location: ""
        });

        const handleJobTitleInputChange = (event) => {
            setValues({...values, job_title: event.target.value});
        }

        const handleStartDateInputChange = (event) => {
            setValues({...values, start_date: event.target.value});
        }
    
        const handleEndDateInputChange = (event) => {
            setValues({...values, end_date: event.target.value});
        }

        const handleCompanyNameInputChange = (event) => {
            setValues({...values, company_name: event.target.value});
        }

        const handleDescriptionInputChange = (event) => {
            setValues({...values, description: event.target.value});
        }

        const handleLocationInputChange = (event) => {
            setValues({...values, location: event.target.value});
        }

        const handleSubmit = e => {
            e.preventDefault();
            props.addExp(values.job_title, values.start_date, values.end_date, values.company_name, values.description, values.location);
            console.log(values.job_title + " " +values.start_date + " "+ values.end_date +  " " + values.company_name +  " " + values.description + " " + values.location);
        }

        if (!props.formClicked) {
            return null;
        }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <TextField variant="outlined"
                        label="Job Title"
                        type="type"
                        id="jobTitle"
                        name="jobTitle"
                        size="small"
                        value={values.job_title}
                        onChange={handleJobTitleInputChange}
                    />
                    <br></br><br></br>
                    <TextField variant="outlined"
                        label="Company Name"
                        type="type"
                        id="companyName"
                        name="companyName"
                        size="small"
                        value={values.company_name}
                        onChange={handleCompanyNameInputChange}
                    />
                     <br></br><br></br>
                    <TextField
                        id="startDate"
                        label="Start Date"
                        name="startDate"
                        type="date"
                        value={values.start_date}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={handleStartDateInputChange}
                    />
                    <TextField
                        id="endDate"
                        label="End Date"
                        name="endDate"
                        type="date"
                        value={values.end_date}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={handleEndDateInputChange}
                    />
                    <br></br><br></br>
                    <TextField 
                        id="location"
                        label="Location"
                        name="location"
                        value={values.location}
                        onChange={handleLocationInputChange}
                    />
                    <br></br><br></br>

                    <TextField 
                        id="description"
                        label="Description"
                        name="description"
                        multiline
                        rows={5}
                        sx={{ width: 500 }}
                        value={values.description}
                        onChange={handleDescriptionInputChange}
                    />
                <br></br><br></br>
                <Button variant="contained" type="submit"> Add </Button><br></br><br></br>
                </form>
               
            </div>
        );
    }


    return(
        <div>
            <ExpForm formClicked={form} addExp={props.addExp}/>
            <Button onClick={() => setForm((prevForm => !prevForm))} variant="outlined"> {form ? 'Cancel' : 'Add Experience Section'} </Button>
        </div>
    );
}

export default AddExp;