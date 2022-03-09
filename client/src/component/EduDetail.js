import React from "react"; 

function EduDetail(props) {
    return (
        <div>
            <p> {props.name} </p>
            <p> {props.start} - {props.end} </p>
            <p> {props.major} </p>
            <p> {props.gpa} </p>
            <br></br>
        </div>
    );
}

export default EduDetail;