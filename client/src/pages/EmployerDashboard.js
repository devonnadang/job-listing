import React, {useState} from "react";
import uuid from 'react-uuid';
import EduDetail from "../component/EduDetail";
import ExpDetail from "../component/ExpDetail";
import InterviewDetail from "../component/InterviewDetail";
import SkillTag from "../component/SkillTag";
import Stack from '@mui/material/Stack';
import Navigation from '../component/Navigation';
import { StylesContext } from "@material-ui/styles";
import styles from './UserProfile.module.css';

function EmployerDashboard(props) {

    const [interviews, setInterviews] = useState([
        {
            id: uuid(),
            name: "Huge Michael",
            date: "Mar 13, 2022",
            start: "3:00",
            end: "4:15",
            location: "Online",
            interviewstage: "Interviewing"
        }
    ]);

    function update (name, date, start, end, location, interviewstage) {
        let newInterviews = 
        {
            id: uuid(),
            name: name,
            date: date,
            start: start,
            end: end,
            location: location,
            interviewstage: interviewstage
        }
        setInterviews(interviews => [...interviews, newInterviews]);
    }

    function editInterviews() {
        alert("add edit interview function here");
    }

    function deleteInterview() {
        alert("delete interview function here");
    }

    return  (
        <div>
            <Navigation />
            
            <div className={styles.contents}>
            
            <h1> Interviews </h1>

            <h2> Candidate Details </h2>
            {
                interviews.map((interview) => (<EduDetail 
                    name={interview.name} 
                    start={interview.start}
                    end={interview.end}
                    major={interview.location}
                    gpa={interview.interviewstage}/>))
            }
            <button className={styles.button} onClick={editInterviews}> Edit Interviews </button>
            </div>
        </div>

    );
}

export default EmployerDashboard;

