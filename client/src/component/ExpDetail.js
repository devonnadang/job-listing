import React from "react"; 

function ExpDetail(props) {
    return (
        <div>
            <p> {props.title} </p>
            <p> {props.company} </p>
            <p> {props.start} - {props.end} | {props.locationCity}, {props.locationState} </p>
            <p> {props.description} </p>
        </div>
    );
}

export default ExpDetail;