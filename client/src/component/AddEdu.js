import React, {useEffect, useState}  from "react"; 

function AddEdu(props) {
    const [form, setForm] = useState(false);

    function EducationForm(props) {

        function verify() {
            verifyGpa();
        }
        
        function verifyGpa(){
            var gpa = document.getElementById("gpa").value;
            var ver = parseFloat(gpa);
            return ver >= 0 && ver <=4;
        }
    
        if (!props.formClicked) {
            return null;
        }
    
        return (
            <div>
                <label> School Name </label>
                    <input type="text"></input> <br></br><br></br>
                <label> Start Date </label>
                   <input type="month"></input>
                <label> End Date </label>
                    <input type="month"></input> <br></br><br></br>
                <label> Major </label>
                    <input type="text"></input>
                <label> GPA </label> 
                    <input type="text" id="gpa"></input> <br></br><br></br>
                <button onClick={verify}> Add </button>
                <br></br><br></br>
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