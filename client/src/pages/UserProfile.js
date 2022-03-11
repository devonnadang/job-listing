import React, {useState} from "react";
import uuid from 'react-uuid';
import EduDetail from "../component/EduDetail";
import ExpDetail from "../component/ExpDetail"
import SkillTag from "../component/SkillTag";
import Stack from '@mui/material/Stack';
import Navigation from './Navigation';
import styles from './UserProfile.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';





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

    function deleteSkill() {
        alert("delete skill function here");
    }

    function addSkill(){
        alert("add skill function here");
    }

    function editInterests() {
        alert("edit interests function here");
    }

    return  (
        <div>
            <Navigation />

            <div className={styles.main}>
                <h1> Jane Doe </h1>
                <Avatar sx={{width:100, height: 100}}> </Avatar>
                <h2> Education Details </h2>
                {
                    schools.map((school) => (<EduDetail 
                        name={school.name} 
                        start={school.start}
                        end={school.end}
                        major={school.major}
                        gpa={school.gpa}/>))
                }
                <Button onClick={editSchools} variant="outlined"> Add School </Button>
                
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
               
                <h2> Skills </h2>
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                {
                    skills.map((skill) => <SkillTag name={skill.skill} deleteSkill={deleteSkill}/>)
                }
                </Stack>
                <TextField variant="outlined" size="small"> </TextField> <Button variant ="outlined" onClick={addSkill}> Add </Button>
                
                <h2> Your Interests <Button variant="text" onClick={editInterests}> Edit </Button> </h2>
                <p> Job Schedule </p>
                <p> Cities </p>
                <p> Roles </p>

            </div>
            
        </div>

    );
}

export default UserProfile;
