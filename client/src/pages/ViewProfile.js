import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../component/Navigation";

function ViewProfile(props) {

    const { id }= useParams()

    return (
        <div>
            <Navigation/>
            <div>
            <p>Viewing profile for user {id} </p>
            </div>
            
        </div>
    )
}
export default ViewProfile;