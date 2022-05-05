import React from "react"; 

function ExpDetail(props) {

    const startDate = props.start.substring(0,10).replaceAll('-', '/');
    const endDate = props.end.substring(0,10).replaceAll('-', '/');

    return (
        <div>
            <p> {props.title} </p>
            <p> {props.company} </p>
            <p> {startDate} - {endDate} | {props.location} </p>
            <p> {props.description} </p>
            <br></br>
        </div>
    );
}

export default ExpDetail;