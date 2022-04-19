import React, {useState} from "react";
import uuid from 'react-uuid';
import EduDetail from "../component/EduDetail";
import ExpDetail from "../component/ExpDetail";
import EmployerJob from "../component/EmployerJob"
import InterviewDetail from "../component/InterviewDetail";
import SkillTag from "../component/SkillTag";
import Stack from '@mui/material/Stack';
import Navigation from '../component/Navigation';
import { StylesContext } from "@material-ui/styles";
import styles from './UserProfile.module.css';
import Button from '@mui/material/Button';
import EmployerDashboard from "./EmployerDashboard";
import EmployerDashViewAll from "../component/EmployerDashViewAll";

function EmployerJobPosting(props) {

    const [jobinfo, setjobinfo] = useState([
        {
            title: "Front End (UI) Software Engineer Intern - React.js",
            location: "San Jose",
            experience: "3 years",
            description:"Delivered “as a service” and is built using cloud-native application technologies, a microservices-style architecture, and is deployed in application containers.",
            application: "3",
            unreadApp: "2",
            interview: "1",
        
         }, 
         {
             title: "Software Engineer (Identify Team)",
             location: "San Francisco",
             experience: "10+ years",
             description:"Gain knowledge about how next-generation firewalls inspect network packets",
             application: "3",
             unreadApp: "1",
             interview: "1"
         }
        
    ]);

    // function update (title, start, end, location, experience, description, application, unreadApp, interview) {
    //     let newJobInfo = 
    //     {
    //         title: title,
    //         location: location,
    //         experience: experience,
    //         description: description,
    //         application: application,
    //         unreadApp: unreadApp,
    //         interview: interview
    //     }
    //     setjobinfo(joninfo=> [...jobinfo, newJobInfo]);
    // }

    function viewAll(name, education, experience){
        alert("view all details here");
    }

    return  (
        <div>
            <Navigation />
            
            <div style={{position: 'absolute', top: 300, left: 300}}>
            <div className={styles.contents}>
            
            <h1> Your Job Posting </h1>
            {
                jobinfo.map((jobinfo) => (<EmployerJob
                    title = {jobinfo.title}
                    location = {jobinfo.location}
                    experience = {jobinfo.experience}
                    description = {jobinfo.description}
                    application = {jobinfo.application}
                    unreadApp = {jobinfo.unreadApp}
                    interview = {jobinfo.interview}
                    />))        
            } 
                     
            </div>
        </div>
        </div>

    );
}

export default EmployerJobPosting;

