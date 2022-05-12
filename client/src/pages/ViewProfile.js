import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import Navigation from "../component/Navigation";
import { Avatar, Chip, Stack } from "@mui/material";

function ViewProfile(props) {

    const { id }= useParams()

    const [educationList, setEducationList] = useState([])

    useEffect(() => {
        fetch("/user/education/" + id)
            .then(res => res.json())
            .then(response => setEducationList(response))
    }, [])

    const [experienceList, setExperienceList] = useState([])

    useEffect(() => {
        fetch("/user/experience/" + id)
            .then(res => res.json())
            .then(response => setExperienceList(response))
    }, [])

    const [skillList, setSkillList] = useState([])

    useEffect(() => {
        fetch("/user/skills/" + id)
            .then(res => res.json())
            .then(response => setSkillList(response))
    }, [])

    const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        image_url: ""
    })

    useEffect(() => {
        fetch("/user/profile/" + id)
            .then(res => res.json())
            .then(response => setProfile(response[0]))
    }, [])

    return (
        <div>
            <Navigation/>
            <div style={{padding: 100}}>
            <h1>{profile.first_name} {profile.last_name}</h1>
            <Avatar src={profile.image_url} sx={{width: 100, height: 100}}/>
            <h2>Education</h2>
            {
                educationList.map(edu =>
                    <div>
                        <p>{edu.school_name}</p>
                        <p>Major: {edu.major}</p>
                        <p>{edu.start_date} - {edu.end_date} </p>
                        <p>GPA: {edu.gpa}</p>
                        <br></br>
                    </div>
                    
                )
            }
            <h2>Experience</h2>
            {
                experienceList.map(exp => 
                    <div>
                        <p>{exp.job_title}</p>
                        <p>{exp.company_name} | {exp.location}</p>
                        <p>{exp.description}</p>
                        <br></br>
                    </div>
                    )
            }
            <h2>Skills</h2>
            <Stack direction="row" spacing={2}>
                {
                    skillList.map(skill =>
                        <Chip
                            label={skill.skill_name}    
                        />
                    )
                }
            </Stack>
            </div>
            
        </div>
    )
}
export default ViewProfile;