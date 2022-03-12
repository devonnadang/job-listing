import React, {useState} from "react";
import uuid from 'react-uuid';
import EduDetail from "../component/EduDetail";
import ExpDetail from "../component/ExpDetail"
import SkillTag from "../component/SkillTag";
import Stack from '@mui/material/Stack';
import Navigation from '../component/Navigation';
import { StylesContext } from "@material-ui/styles";
import styles from './UserProfile.module.css';



function UserProfile(props) {

    const [schools, setSchools] = useState([
        {
            id: uuid(),
            name: "San Jose State University",
            start: "Aug 2019",
            end: "May 2023",
            major: "Computer Science",
            gpa: "3.7"
        },
        {
            id: uuid(),
            name: "SJ High School",
            start: "Aug 2015",
            end: "May 2019",
            major: "",
            gpa: "3.7"
        }
    ]);

    const [skills, setSkills] = useState([
        {
            id: uuid(),
            skill: "React"
        },
        {
            id: uuid(),
            skill: "Javascript"
        },
        {
            id: uuid(),
            skill: "Java"
        },
        {
            id: uuid(),
            skill: "Github"
        },
    ]);

    function addSchool (name, start, end, major, gpa) {
        let newSchool = 
        {
            id: uuid(),
            name: name,
            start: start,
            end: end,
            major: major,
            gpa: gpa
        }
        setSchools(schools => [...schools, newSchool]);
    }

    function editSchools() {
        alert("add school function here");
    }

    function editExperience() {
        alert("add experience function here");
    }

    function deleteSkill() {
        alert("delete skill function here");
    }

    return  (
        <div>
            <Navigation />
            <div className={styles.contents}>
            <h1> Jane Doe </h1>
            <h2> Education Details </h2>
            {
                schools.map((school) => (<EduDetail 
                    name={school.name} 
                    start={school.start}
                    end={school.end}
                    major={school.major}
                    gpa={school.gpa}/>))
            }
            <button className={styles.button} onClick={editSchools}> Add School </button>
            <h2> Experience Details </h2>
            <ExpDetail 
                title="Software Developer Intern" 
                company="Apple" 
                start="May 2020" 
                end="Aug 2020" 
                locationCity="Cupertino" 
                locationState="CA"
                description="
                -Developed 3 projects during duration. -Collaborated in a team of 10" 
                />
            <button className={styles.button} onClick={editExperience}> Add Experience </button>
            <h2> Skills </h2>
            <Stack className={styles.skills} spacing={2} direction="column" alignItems="center" justifyContent="center">
            {
                skills.map((skill) => <SkillTag name={skill.skill} deleteSkill={deleteSkill}/>)
            }
            </Stack>
        
            <h2> Your Interests </h2>
            </div>
        </div>

    );
}

export default UserProfile;
