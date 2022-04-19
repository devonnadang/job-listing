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
import { CallEndTwoTone } from "@material-ui/icons";





function UserProfile(props) {

    const userID = 1

    const [schools, setSchools] = useState([]);
    
    //runs once to display schools already in the database
    useEffect(() => {
        fetch("/education/" + userID)
            .then((res) => res.json())
            .then(resJson => {
                setSchools(resJson.data);
            });
    }, []);


    function addEdu (schoolName, start, end, major, gpa){

        fetch("/education/add", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_account_id: userID,
                major: major,
                school_name : schoolName,
                start_date: start,
                end_date: end,
                gpa: gpa
            })
        }).then(() => setSchools(schools => [...schools, 
            {
                user_account_id: userID,
                id: uuid(),
                major: major,
                school_name: schoolName,
                start_date: start,
                end_date: end,
                gpa: gpa}]))
    }


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

    const [skills, setSkills] = useState([]); //skills specific to the user

    useEffect(() => {
        fetch("/skill/list/" + userID)
            .then((res) => res.json())
            .then(resJson => {
                setSkills(resJson.data);
            });
    }, []);

    function deleteSkill(user_account_id, skill_name) {
        fetch("/skill/delete", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: user_account_id,
                skill_name: skill_name
            })
        }).then(() => setSkills(skills.filter(item => item.skill_name !== skill_name)))
    }

    function editExperience() {
        alert("add experience function here");
    }

    function editInterest(){
        alert("add interest function here");
    }


    const [skillText, setSkillText] = useState(null); //the current skill input

    const addSkill = (e) => {
        e.preventDefault()
        fetch("/skill/add", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: userID,
                skill_name: skillText
            })
        }).then(() => setSkills(skills => [...skills, {user_account_id: userID, skill_name: skillText}]))
            .then(() => setSkillNames(skillNames => [...skillNames, {skill_name: skillText}]))
    }

    const [skillNames, setSkillNames] = useState([]); //the skill drop down

    
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
                        key={uuid()}
                        name={school.school_name} 
                        start={school.start_date}
                        end={school.end_date}
                        major={school.major}
                        gpa={school.gpa}/>))
                }
                <AddEdu addEdu={addEdu}/>
                
                <h2> Experience Details <Button variant="text" onClick={editExperience}> Edit </Button> </h2>
                {
                  experiences.map((experience) => ( <ExpDetail
                  key={uuid()}
                  title={experience.job_title}
                  company={experience.company_name}
                  start={experience.start_date}
                  end = {experience.end_date}
                  location={experience.location}
                  description = {experience.description}/>))
                }
               <AddExp />
               
                <h2> Skills </h2>
                <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                {
                    skills.map((skill) => <SkillTag name={skill.skill_name} id={skill.user_account_id} key={uuid()} deleteSkill={deleteSkill}/>)
                }
                </Stack>
                <form onSubmit={addSkill}>
                    <Autocomplete
                        id="combo-box-demo"
                        freeSolo
                        options={skillNames.map((option) => option.skill_name)}
                        sx={{ width: 300 }}
                        onChange={(event, value) => setSkillText(value)}
                        onInputChange={(event, value) => setSkillText(value)}
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
