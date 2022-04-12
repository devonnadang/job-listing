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

function EmployerJobPosting(props) {

    const [jobinfo, setjobinfo] = useState([
        {
            title: "Front End (UI) Software Engineer Intern - React.js",
            start: "3:00",
            end: "4:15",
            location: "Online",
            experience: "Passionate developers to architect, design, develop, and test the web application",
            description:"Delivered “as a service” and is built using cloud-native application technologies, a microservices-style architecture, and is deployed in application containers.",
        }
    ]);

    function update (title, start, end, location, experience, description) {
        let newJobInfo = 
        {
            title: title,
            start: start,
            end: end,
            location: location,
            experience: experience,
            description: description,
        }
        setjobinfo(joninfo=> [...jobinfo, newJobInfo]);
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
                    start = {jobinfo.start}
                    end = {jobinfo.end}
                    location = {jobinfo.location}
                    experience = {jobinfo.experience}
                    description = {jobinfo.description}/>))       
            }
            <button className={styles.button}> Edit Interviews </button>
            </div>
        </div>
        </div>

    );
}

export default EmployerJobPosting;

