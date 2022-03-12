import React, {useState} from "react";
import uuid from 'react-uuid';
import EduDetail from "../component/EduDetail";
import ExpDetail from "../component/ExpDetail"
import SkillTag from "../component/SkillTag";
import Stack from '@mui/material/Stack';
import Navigation from './Navigation';
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

    const [interests, setInterest] = useState([
            {
                jobType:"Intership",
                cities:"San Jose, CA",
                role:"Software Engineer",
            },
            {
                jobType:"Full time",
                cities:"San Francisco, CA",
                role:"Software Developer",
            }
        ]);
    
    function addInterest(jobType, cities, role) {
        let newInterest = 
        {
            jobType :jobType,
            cities: cities,
            role: role,
        }
        setInterest(interests => [...interests, newInterest]);
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

    function deleteSkill() {
        alert("delete skill function here");
    }
    function editExperience() {
        alert("add experience function here");
    }

    function editInterest(){
        alert("add interest function here");
    }

    return  (
        <div>
            <Navigation />
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
            <button onClick={editSchools}> Add School </button>
            
            <h2> Experience Details </h2>
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
             <button onClick={editExperience}> Add Experience </button>

            <h2> Skills </h2>
            <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
            {
                skills.map((skill) => <SkillTag name={skill.skill} deleteSkill={deleteSkill}/>)
            }
            </Stack>
        
            <h2> Your Interests </h2>   <button onClick={editInterest}>EDIT</button> 
            {
                interests.map((interest)=> ( <InterestDetail
                    jobType={interest.jobType}
                    cities={interest.cities}
                    role={interest.role}/>))
            }

        </div>

    );
}

export default UserProfile;
