
import Button from '@mui/material/Button';
import React, {useEffect, useState}  from "react"; 
import EmployerDashViewAll from "../component/EmployerDashViewAll";

function EmployerJob(props) {
    return (
        <div>
            <p> Title: "{props.title}", Location: {props.location}, Experience: {props.experience}</p>
            <p></p>
            <p>Description (Character Limit):</p>
            <p> {props.description}</p>
            <p></p>
            <p> {props.application} Applicants, {props.unreadApp} Unread Applicants , {props.interview} Interviews </p>
            <br></br>
             {/* <Button variant="text" > View All Details </Button>  */}
             <EmployerDashViewAll/>  

        </div>
    );
}

export default EmployerJob;