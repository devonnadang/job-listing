import React, {useEffect, useState} from "react";
import uuid from 'react-uuid';
import EduDetail from "../component/EduDetail";
import AddEdu from "../component/AddEdu";
import AddExp from "../component/AddExp";
import ExpDetail from "../component/ExpDetail";
import SkillTag from "../component/SkillTag";
import Stack from '@mui/material/Stack';
import Navigation from '../component/Navigation';
import styles from './UserProfile.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'
import Avatar from '@mui/material/Avatar';
import InterestDetail from "../component/InterestDetail";





function UserProfile(props) {

    const userID = 1

    const [schools, setSchools] = useState([]);
    
    useEffect(() => {
        fetch("/education/" + userID)
            .then((res) => res.json())
            .then(resJson => {
                setSchools(resJson.data);
            });
    }, []);

    const [experiences, setExperience] = useState([]);

    
    useEffect(() => {
        fetch("/experience/" + userID)
            .then((res) => res.json())
            .then(resJson => {
                setExperience(resJson.data);
            });
    }, []);
    

    
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

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("/skill/list/" + userID)
            .then((res) => res.json())
            .then(resJson => {
                setSkills(resJson.data);
            });
    }, []);

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


    const [skillText, setSkillText] = useState(null);

    const addSkill = (e) => {
        e.preventDefault()
        fetch("/skill/add", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: userID,
                skill_name: skillText
            })
        }).then(() => setSkills(skills => [...skills, {skill_name: skillText}]))
    }

    const [skillNames, setSkillNames] = useState([])

    
    useEffect(() => {
        fetch("/skill/names")
            .then((res) => res.json())
            .then(resJson => {
                setSkillNames(resJson.data);
            });
    }, []);
    

    function editEducation() {
        alert("edit education function here");
    }

    function editInterests() {
        alert("edit interests function here");
    }

    
    const [name, setName] = useState([]);

    useEffect(() => {
        fetch("/profile/" + userID)
            .then((res) => res.json())
            .then(resJson => {
                setName(resJson.data[0]);
            });
    }, []); 


    return  (
        <div>
            <Navigation />

            <div className={styles.main}>
                <h1> {name.first_name} {name.last_name} </h1>
                <Avatar sx={{width:100, height: 100}}> </Avatar>
                <h2> Education Details  <Button variant="text" onClick={editEducation}> Edit </Button> </h2> 
                {
                    schools.map((school) => (<EduDetail 
                        name={school.school_name} 
                        start={school.start_date}
                        end={school.end_date}
                        major={school.major}
                        gpa={school.gpa}/>))
                }
                <AddEdu />
                
                <h2> Experience Details <Button variant="text" onClick={editExperience}> Edit </Button> </h2>
                {
                  experiences.map((experience) => ( <ExpDetail
                  title={experience.job_title}
                  company={experience.company_name}
                  start={experience.start_date}
                  end = {experience.end_date}
                  locationCity={experience.job_title}
                  locationState = {experience.job_title}
                  description = {experience.description}/>))
                }
               <AddExp />
               
                <h2> Skills </h2>
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                {
                    skills.map((skill) => <SkillTag name={skill.skill_name} deleteSkill={deleteSkill}/>)
                }
                </Stack>
                <form onSubmit={addSkill}>
                    <Autocomplete
                        id="combo-box-demo"
                        
                        options={skillNames.map((option) => option.skill_name)}
                        sx={{ width: 300 }}
                        onChange={(event, value) => setSkillText(value)}
                        renderInput={(params) => <TextField {...params} label="Name" />}
                    /> 
                    <Button variant ="outlined" type="submit"> Add </Button>
                </form>
                
                
                <h2> Your Interests <Button variant="text" onClick={editInterests}> Edit </Button> </h2>
                <InterestDetail jobs={jobInterests} cities={cityInterests} roles={roleInterests}/>

            </div>
        </div>

    );
}

export default UserProfile;
