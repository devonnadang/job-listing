import React from "react"; 

function JobListing(props) {
    return (
        <div>
            <p> {props.job_title} </p>
            <p> {props.company_name} </p>
            <p> {props.experience} </p>
            <p> {props.description} </p>
            <p> {props.salary} </p>
            <br></br>
        </div>
    );
}

export default JobListing;