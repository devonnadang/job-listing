import React from "react"; 

function InterestDetail(props) {
    return (
        <div>
            <h3> Job Type </h3>
            {
                props.jobs.map(job => 
                    <p> {job} </p>
                )
            }

            <h3> Cities </h3>
            {
                props.cities.map(city =>
                    <p> {city} </p>
                )
            }

            <h3> Roles </h3>
            {
                props.roles.map(role =>
                    <p> {role} </p>
                )
            }
            <br></br>
        </div>
    );
}

export default InterestDetail;