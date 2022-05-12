
import Button from '@mui/material/Button';
import React, {useEffect, useState}  from "react"; 
import EmployerDashViewAll from "../component/EmployerDashViewAll";

function EmployerJob(props) {
    return (
        <div>
            <p> Title: "{props.title}"</p>
            <p> Location: {props.location} </p>
            <p>Experience: {props.experience}</p>
            <p></p>
            <p>Description: {props.description} </p>
            { /* <p> {props.application} Applicants, {props.unreadApp} Unread Applicants , {props.interview} Interviews </p> */ }
            <br></br>
             {/* <Button variant="text" > View All Details </Button>  */}
             <EmployerDashViewAll job_listing_id={props.job_listing_id}/>  

        </div>
    );
}

export default EmployerJob;