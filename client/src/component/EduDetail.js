import React from "react"; 
import Button from '@mui/material/Button';


function EduDetail(props) {

    const handleSubmit = e => {
        e.preventDefault();
        props.deleteEdu(props.user_id, props.major, props.name);
        console.log("handle submit delete section " + props.user_id + " " + props.major + " " + props.name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <p> {props.name} </p>
                <p> {props.start} - {props.end} </p>
                <p> {props.major} </p>
                <p> {props.gpa} </p>
                <br></br>
                <Button variant="outlined" type="submit"> Delete </Button>
                <br></br><br></br>
            </form>

        </div>
    );
}

export default EduDetail;