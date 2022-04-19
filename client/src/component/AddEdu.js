import React, {useEffect, useState}  from "react"; 

function AddEdu(props) {
    const [form, setForm] = useState(false);

    const [schoolName, setName] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [major, setMajor] = useState('');
    const [gpa, setGPA] = useState(0);


    const handleSubmit = e => {
        e.preventDefault();
        props.addEdu(schoolName, start, end, major, gpa);
        console.log(schoolName + start + end + major + gpa);
    }

    function EducationForm(props) {
        if (!props.formClicked) {
            return null;
        }
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="schoolName"> School Name </label>
                        <input type="text" id="schoolName" name="schoolName" onChange={(event, value)=>setName(value)}></input> <br></br><br></br>
                    <label htmlFor="startDate"> Start Date </label>
                    <input type="month" id="startDate" name="startDate" onChange={(event, value)=>setStart(value)}></input>
                    <label htmlFor="endDate"> End Date </label>
                        <input type="month" id="endDate" name="endDate" onChange={(event, value)=>setEnd(value)}></input> <br></br><br></br>
                    <label htmlFor="major"> Major </label>
                        <input type="text" id="major" name="major" onChange={(event, value)=>setMajor(value)}></input>
                    <label htmlFor="gpa"> GPA </label> 
                        <input type="text" name="gpa" id="gpa"  onChange={(event, value)=>setGPA(value)}></input> <br></br><br></br>
                    <button type="submit"> Add </button>
                    <br></br><br></br>
                </form>
            </div>
        );
    }
    
    return(
        <div>
            <EducationForm formClicked={form} />
            <button onClick={() => setForm((prevForm => !prevForm))} variant="outlined"> {form ? 'Cancel' : 'Add Education Section'} </button>
        </div>
    );
    
}

export default AddEdu;