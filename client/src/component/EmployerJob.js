import React from "react"; 

function EmployerJob(props) {
    return (
        <div>
            <p> {props.title} {props.start} - {props.end} {props.location} {props.experience}</p>
            <p> {props.description} </p>
            <br></br>
        </div>
    );
}

export default EmployerJob;