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
            location: "San Jose, CA",
            experience: "3 years",
            description:"Delivered “as a service” and is built using cloud-native application technologies, a microservices-style architecture, and is deployed in application containers.",
            application: "3",
            unreadApp: "2",
            interview: "1",
        
         }, 
         {
             title: "Software Engineer (Identify Team)",
             location: "San Francisco, CA",
             experience: "2 years",
             description:"Gain knowledge about how next-generation firewalls inspect network packets",
             application: "3",
             unreadApp: "2",
             interview: "1"
         },

         {
            title: "AI Python Engineer",
            location: "Piscataway, NJ",
            experience: "4 years",
            description:"Conceptualize the design for AI application/functionality using Python.",
            application: "3",
            unreadApp: "2",
            interview: "1",
        
         },

         {
            title: "Summer Associate - Data Analysis",
            location: "Houston, TX",
            experience: "1 year",
            description:"Garner hands-on experience through relevant projects and assignments",
            application: "3",
            unreadApp: "2",
            interview: "1",
        
         },

         {
            title: "Digital Artist Intern (Remote)",
            location: "Riverside, CA",
            experience: "1 year",
            description:"We are seeking a digital artist interns and volunteers to join our team. You will report directly to the Animation Director. You will be working on animation backgrounds, prop design.",
            application: "3",
            unreadApp: "2",
            interview: "1",
        
         }
        
    ]);

    return  (
        <div>
            
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

