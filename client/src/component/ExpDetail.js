import React from "react"; 

function ExpDetail(props) {
    return (
        <div>
            <p> {props.title} </p>
            <p> {props.company} </p>
            <p> {props.start} - {props.end} | {props.location} </p>
            <p> {props.description} </p>
            <br></br>
        </div>
    );
}

export default ExpDetail;