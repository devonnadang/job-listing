import React, {useState} from "react";
import uuid from 'react-uuid';
import EduDetail from "../component/EduDetail";
import ExpDetail from "../component/ExpDetail"





function UserProfile(props) {

    // var eduList;

    // const [schools, setSchools] = useState([]);

    // function addSchool(name) {
    //     let newSchool = 
    //     {
    //         id: uuid(),
    //         name: name
    //     }
    //     const newEduData = [...schools, newSchool];
    //     setSchools(newEduData);
    // }


    // addSchool("San Jose High School");
    // addSchool("San Jose State University");

    // eduList = schools.map(school => (
    //     <EduDetail
    //         id={school.id}
    //         name={school.name}
    //         />
    // ));

    return  (
        <div>
            <h1> Jane Doe </h1>
            <h2> Education Details </h2>
            <EduDetail 
                name="San Jose Sate University" 
                start="Aug 2019" 
                end="May 2023" 
                major="Computer Science" 
                gpa="3.7"
                />
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
            <h2> Your Interests </h2>
        </div>

    );
}

export default UserProfile;