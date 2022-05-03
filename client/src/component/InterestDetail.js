import React from "react"; 

function InterestDetail(props) {
    return (
        <div>
            <h3> Job Type </h3>
            {
                props.jobs.map(job => 
                    <p id={job} key={job}> {job} </p>
                )
            }

            <h3> Cities </h3>
            {
                props.cities.map(city =>
                    <p id={city} key={city}> {city} </p>
                )
            }

            <h3> Roles </h3>
            {
                props.roles.map(role =>
                    <p id={role} key={role}> {role} </p>
                )
            }
            <br></br>
        </div>
    );
}

export default InterestDetail;