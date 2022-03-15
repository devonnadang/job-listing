import React from "react"; 

function InterviewDetail(props) {
    return (
        <div>
            <p> {props.name} </p>
            <p> {props.date} </p>
            <p> {props.start} - {props.end} </p>
            <p> {props.location} </p>
            <p> {props.interviewstage} </p>
            <br></br>
        </div>
    );
}

export default InterviewDetail;