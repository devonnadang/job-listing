import React, {useState} from "react";
import uuid from 'react-uuid';
import EduDetail from "../component/EduDetail";
import ExpDetail from "../component/ExpDetail";
import SkillTag from "../component/SkillTag";
import Stack from '@mui/material/Stack';
import Navigation from '../component/Navigation';
import styles from './UserProfile.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import InterestDetail from "../component/InterestDetail";





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
    
    const [experiences, setExperience] = useState([
            {
                title:"Software Engineer Summer Intern",
                company:"Amazon",
                start:"May 2019",
                end:"Aug 2019",
                locationCity: "San Francisco",
                locationState:"CA",
                description:"-Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring to market innovative products and services.",
    
            },
            {
                title:"Software Developer Intern",
                company:"Apple",
                start:"May 2020", 
                end:"Aug 2020",
                locationCity:"Cupertino", 
                locationState:"CA",
                description:"-Developed 3 projects during duration. -Collaborated in a team of 10",
    
            },
            {
                title:"Web Developer Intership",
                company:"Office Depot",
                start:"May 2021",
                end:"Aug 2021",
                locationCity:"San Francisco",
                locationState:"CA",
                description:"- Writes unit tests and automated tests to ensure software quality. Writes automated software deployment pipelines.",

        }
            
        ]);

    const [jobInterests, setJobInterests] = useState([
        "Internship", "Part-Time"
    ]);

    const [cityInterests, setCityInterests] = useState([
        "San Jose, CA", "San Francisco, CA"
    ]);

    const [roleInterests, setRoleInterests] = useState([
        "Software Engineer", "Software Developer"
    ]);
 
    function addExperience (title, company, start, end, locationCity, locationState, description) {
            let newExperience = 
            {
                title: title,
                company: company,
                start: start,
                end: end,
                locationCity: locationCity,
                locationState: locationState,
                description: description,
            }
            setExperience(experiences => [...experiences, newExperience]);
        }

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
    function editExperience() {
        alert("add experience function here");
    }

    function editInterest(){
        alert("add interest function here");
    }

    function addSkill(){
        alert("add skill function here");
    }

    function editEducation() {
        alert("edit education function here");
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
                <h2> Education Details  <Button variant="text" onClick={editEducation}> Edit </Button> </h2> 
                {
                    schools.map((school) => (<EduDetail 
                        name={school.name} 
                        start={school.start}
                        end={school.end}
                        major={school.major}
                        gpa={school.gpa}/>))
                }
                <Button onClick={editSchools} variant="outlined"> Add School </Button>
                
                <h2> Experience Details <Button variant="text" onClick={editExperience}> Edit </Button> </h2>
                {
                  experiences.map((experience) => ( <ExpDetail
                  title={experience.title}
                  company={experience.company}
                  start={experience.start}
                  end = {experience.end}
                  locationCity={experience.locationCity}
                  locationState = {experience.locationState}
                  description = {experience.description}/>))
                }
                <Button variant ="outlined" onClick={editExperience}> Add Experience </Button>
               
                <h2> Skills </h2>
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                {
                    skills.map((skill) => <SkillTag name={skill.skill} deleteSkill={deleteSkill}/>)
                }
                </Stack>
                <TextField variant="outlined" size="small"> </TextField> <Button variant ="outlined" onClick={addSkill}> Add </Button>
                
                <h2> Your Interests <Button variant="text" onClick={editInterests}> Edit </Button> </h2>
                <InterestDetail jobs={jobInterests} cities={cityInterests} roles={roleInterests}/>

            </div>
        </div>

    );
}

export default UserProfile;
