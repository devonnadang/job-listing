import React, {useEffect, useState} from "react";
import uuid from 'react-uuid';

import EmployerJob from "./EmployerJob"
import styles from '../pages/UserProfile.module.css';

function EmployerJobPosting(props) {

    const employerID = props.employerID;

    return  (
        <div>
            <div style={{position: 'relative', top: 200, left: 200}}>
                <div className={styles.contents}>
                
                <h1> Your Job Postings </h1>
                {
                    props.jobListings.map((jobinfo) => (<EmployerJob
                        key = {uuid()}
                        job_listing_id = {jobinfo.job_listing_id}
                        title = {jobinfo.job_title}
                        location = {jobinfo.job_location}
                        experience = {jobinfo.job_experience}
                        description = {jobinfo.job_description}
                        // application = {jobinfo.application}
                        // unreadApp = {jobinfo.unreadApp}
                        // interview = {jobinfo.interview}
                        />))        
                } 
                        
                </div>
            </div>
        </div>

    );
}

export default EmployerJobPosting;
