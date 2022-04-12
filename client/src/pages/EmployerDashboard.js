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
import EmployerJobPosting from './EmployerJobPosting.js'

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

    // function editInterviews() {
    //     alert("add edit interview function here");
    // }

    function deleteInterview() {
        alert("delete interview function here");
    }

    return  (
        <div>
            <Navigation />
            <EmployerJobPosting />
        </div>

    );
}
export default EmployerDashboard;

