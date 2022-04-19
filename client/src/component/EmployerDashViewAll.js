import React, {useEffect, useState}  from "react"; 

function EmployerDashViewAll(props){
   
    const [form, setForm] = useState(false);

    function EmployerForm(props) {

        if (!props.formClicked) {
            return null;
        }

        return(
            <div>
                <h3>Applicants</h3><br></br><br></br>
                <table >
                    <tr>
                        <th>Name</th>
                        <th>Education</th>
                        <th>Experience</th>
                    </tr>

                    <tr>
                        <td>Jane Doe</td>
                        <td>San Jose State University</td>
                        <td>3 years, Java, Python, C++</td>
                    </tr>

                </table>
                <h3> Unread Candidates </h3><br></br><br></br>
                <table >
                    <tr>
                        <th>Name</th>
                        <th>Education</th>
                        <th>Experience</th>
                    </tr>

                    <tr>
                        <td>Jane Doe</td>
                        <td>San Jose State University</td>
                        <td>3 years, Java, Python, C++</td>
                    </tr>

                </table>
                <h3> Interviews </h3><br></br><br></br>
                <table >
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th># of interviews</th>
                    </tr>

                    <tr>
                        <td>Jane Doe</td>
                        <td>4/16/2022</td>
                        <td>3:00 pm</td>
                        <td>3</td>
                    </tr>

                </table>
            </div>
        );
    }


    return(
        <div>
            <EmployerForm formClicked={form} />
            <button onClick={() => setForm((prevForm => !prevForm))} variant="outlined"> {form ? 'Cancel' : 'View All Details'} </button>
        </div>
    );
 }

export default EmployerDashViewAll;