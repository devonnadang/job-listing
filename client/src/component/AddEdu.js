import React, {useEffect, useState}  from "react"; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function AddEdu(props) {
    const [form, setForm] = useState(false);

    function EducationForm(props) {
        const [values, setValues] = useState({
            major: "",
            school_name: "",
            start_date: "",
            end_date: "",
            gpa: "",
        });
    
        const handleSchoolNameInputChange = (event) => {
            setValues({...values, school_name: event.target.value});
        }
    
        const handleStartDateInputChange = (event) => {
            setValues({...values, start_date: event.target.value});
        }
    
        const handleEndDateInputChange = (event) => {
            setValues({...values, end_date: event.target.value});
        }
    
        const handleMajorInputChange = (event) => {
            setValues({...values, major: event.target.value});
        }
    
        const handleGpaInputChange = (event) => {
            setValues({...values, gpa: event.target.value});
        }
    
    
        const handleSubmit = e => {
            e.preventDefault();
         //   props.addEdu(values.school_name, values.start, values.end, values.major, values.gpa);
            console.log(values.school_name + " " +values.start + " "+ values.end +  " " + values.major +  " " + values.gpa);
        }
        
        if (!props.formClicked) {
            return null;
        }
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                        <TextField variant="outlined" 
                            label="School Name"
                            type="text" 
                            id="schoolName" 
                            name="schoolName" 
                            size="small"
                            value={values.school_name}
                            onChange={handleSchoolNameInputChange} 
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
                            variant="outlined" 
                            label="Major"
                            type="text" 
                            id="major" 
                            name="major" 
                            size="small"
                            value={values.major}
                            onChange={handleMajorInputChange} 
                        />
                        <TextField 
                            variant="outlined" 
                            label="GPA"
                            type="text" 
                            id="gpa" 
                            name="gpa" 
                            size="small"
                            value={values.gpa}
                            onChange={handleGpaInputChange} 
                        /> 
                    <br></br><br></br>
                        <Button type="submit" variant="contained"> Add </Button>
                    <br></br><br></br>
                </form>
            </div>
        );
    }
    
    return(
        <div>
            <EducationForm formClicked={form} />
            <Button onClick={() => setForm((prevForm => !prevForm))} variant="outlined"> {form ? 'Cancel' : 'Add Education Section'} </Button>
        </div>
    );
    
}

export default AddEdu;