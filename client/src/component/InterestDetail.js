import React from "react"; 

function InterestDetail(props) {
    return (
        <div>
            <p> {props.jobType} </p>
            <p> {props.cities} </p>
            <p> {props.roles} </p>
            <br></br>
        </div>
    );
}

export default InterestDetail;