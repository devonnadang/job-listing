import React from "react"; 
import Button from '@mui/material/Button';


function ExpDetail(props) {

    const startDate = props.start.substring(0,10).replaceAll('-', '/');
    const endDate = props.end.substring(0,10).replaceAll('-', '/');

    const handleSubmit = e => {
        e.preventDefault();
        props.deleteExp(props.title, props.company);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p> {props.title} </p>
                <p> {props.company} </p>
                <p> {startDate} - {endDate} | {props.location} </p>
                <p> {props.description} </p>
                <br></br>
                <Button variant="outlined" type="submit"> Delete </Button>
                <br></br><br></br>
            </form>
        </div>
    );
}

export default ExpDetail;