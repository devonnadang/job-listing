import React, {useEffect, useState} from "react";
import uuid from 'react-uuid';
import EduDetail from "../component/EduDetail";
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
import Axios from 'axios';



function UserProfile(props) {
    //const [userID, setUserID] = useState();
   
    const userID = 1;

    // Axios.get("http://localhost:3001/login").then((response) => {
    //       if(response.data.loggedIn === true) {
    //           setUserID(response.data.user[0].user_account_id);
    //       }});
    

    //userID is printed to console
    //console.log("user id: " + userID);


   

    const [schools, setSchools] = useState([]);
    
    useEffect(() => {
        fetch("/education/list/" + userID)
            .then((res) => res.json())
            .then(resJson => {
                setSchools(resJson.data);
            });
    }, [userID]);

    const [experiences, setExperience] = useState([]);

    
    useEffect(() => {
        fetch("/experience/list/" + userID)
            .then((res) => res.json())
            .then(resJson => {
                setExperience(resJson.data);
            });
    }, [userID]);
    

    
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
    }, [userID]);

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
        }).then(() => setSkills(skills => [...skills, {user_account_id: userID, skill_name: skillText}]))
            .then(() => setSkillNames(skillNames => [...skillNames, {skill_name: skillText}, userID]))
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

    
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch("/profile/" + userID)
            .then((res) => res.json())
            .then(resJson => {
                setProfile(resJson.data[0]);
            });
    }, [userID]); 


    return  (
        <div>
            <Navigation />

            <div className={styles.main}>
                <h1> {profile.first_name} {profile.last_name} </h1>
                <Avatar src={profile.image_url} sx={{width:100, height: 100}}> </Avatar>
                <h2> Education Details  <Button variant="text" onClick={editEducation}> Edit </Button> </h2> 
                {
                    schools.map((school) => (<EduDetail 
                        name={school.school_name} 
                        start={school.start_date}
                        end={school.end_date}
                        major={school.major}
                        gpa={school.gpa}/>))
                }
                <Button onClick={editSchools} variant="outlined"> Add School </Button>
                
                <h2> Experience Details <Button variant="text" onClick={editExperience}> Edit </Button> </h2>
                {
                  experiences.map((experience) => ( <ExpDetail
                  title={experience.job_title}
                  company={experience.company_name}
                  start={experience.start_date}
                  end = {experience.end_date}
                  location={experience.location}
                  description = {experience.description}/>))
                }
                <Button variant ="outlined" onClick={editExperience}> Add Experience </Button>
               
                <h2> Skills </h2>
                <Stack spacing={2} direction="row" alignItems="center">
                {
                    skills.map((skill) => <SkillTag name={skill.skill_name} id={skill.user_account_id} deleteSkill={deleteSkill}/>)
                }
                </Stack>
                <br></br>
                <form onSubmit={addSkill}>
                    <Stack direction="row">
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
                    </Stack>
                    
                </form>
                
                
                <h2> Your Interests <Button variant="text" onClick={editInterests}> Edit </Button> </h2>
                <InterestDetail jobs={jobInterests} cities={cityInterests} roles={roleInterests}/>

            </div>
        </div>

    );
}

export default UserProfile;
