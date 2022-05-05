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

    async function getSchoolData() {
        let response = await fetch("/education/list/" + userID);

        console.log(response.status); //200
        console.log(response.statusText); //OK

        if (response.status == 200) {
            const schoolData = await response.json();
            console.log(schoolData.data);
            return schoolData.data;
        } else {
            console.log("error getting school data");
        }
    }

    //runs once to display schools already in the database
    useEffect(() => {
        getSchoolData()
            .then(result => {
                setSchools(result);
            })
            .catch(() => []);
    }, []);


    const addEdu = (schoolName, start, end, major, gpa) => {
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

    const deleteEdu = (id, major, schoolName) => {
        fetch("/education/delete", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_account_id: id,
                major: major,
                school_name: schoolName
            })
        })
        .then(setSchools(schools.filter(school => school.major!=major && school.school_name != schoolName)))
    }
    

    const [experiences, setExperience] = useState([]);

    async function getExperienceData() {
        let response = await fetch("/experience/list/" + userID);

        console.log(response.staus); //200
        console.log(response.statusText); //OK

        if (response.status == 200) {
            const experienceData = await response.json();
            console.log(experienceData.data);
            return experienceData.data;
        } else {
            console.log("error getting school data");
        }
    }

    //runs once to display schools already in the database
    useEffect(() => {
        getExperienceData()
            .then(result => {
                setExperience(result);
            })
            .catch(() => []);
    }, []);
    
    const addExp = (jobTitle, start, end, company, description, location) => {
        fetch("/experience/add", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_account_id: userID,
                job_title: jobTitle,
                start_date: start,
                end_date: end,
                company_name : company,
                description: description,
                location: location
            })
        }).then(() => setExperience(experience => [...experiences, 
            {
                user_account_id: userID,
                id: uuid(),
                job_title: jobTitle,
                start_date: start,
                end_date: end,
                company_name: company,
                description: description,
                location: location
            }]))
    }
    const deleteExp = (id, job_title, company_name) => {
        fetch("/experience/delete", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_account_id: id,
                job_title: job_title,
                company_name: company_name
            })
        })
        .then(setExperience(experiences.filter(experience => experience.job_title!=job_title && experience.company_name!= company_name)))
    }

    
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
            })
            .catch(() => []);
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

    }, []); 


    return  (
        <div>
            <Navigation />

            <div className={styles.main}>
                <h1> {profile.first_name} {profile.last_name} </h1>
                <Avatar src={profile.image_url} sx={{width:100, height: 100}}> </Avatar>
                <h2> Education Details </h2> 
                {
                    schools.map((school) => (<EduDetail
                        key={uuid()}
                        user_id={userID}
                        name={school.school_name} 
                        start={school.start_date}
                        end={school.end_date}
                        major={school.major}
                        gpa={school.gpa}
                        deleteEdu={deleteEdu}
                        />))
                }
                <AddEdu addEdu={addEdu}/>
                
                <h2> Experience Details </h2>
                {
                  experiences.map((experience) => ( <ExpDetail
                  key={uuid()}
                  user_id={userID}
                  title={experience.job_title}
                  company={experience.company_name}
                  start={experience.start_date}
                  end = {experience.end_date}
                  location={experience.location}
                  description = {experience.description}
                  deleteExp={deleteExp}/>))
                }
               <AddExp addExp={addExp}/>
               
                <h2> Skills </h2>
                <Stack spacing={2} direction="row" alignItems="center">
                {

                    skills.map((skill) => <SkillTag name={skill.skill_name} id={skill.user_account_id} key={uuid()} deleteSkill={deleteSkill}/>)

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
