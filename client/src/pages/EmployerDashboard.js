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


    

    return  (
        <div>
            <Navigation />
            <EmployerJobPosting />
        </div>

    );
}
export default EmployerDashboard;

