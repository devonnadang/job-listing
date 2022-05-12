import { spacing } from "@mui/system";
import "./EmployerDash.css"
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
                        <td>Alfreds Futterkiste</td>
                        <td >San Jose State University</td>
                        <td >Java, Python, C++</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td >Santa Clara University</td>
                        <td >Java, C, Assembley Language</td>
                    </tr>
                    <tr>
                        <td>Haomiao Wang</td>
                        <td >Stanford University</td>
                        <td >Python, Java, C++</td>
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
                        <td>Maria Anders</td>
                        <td>University of California, Davis</td>
                        <td>HTML, CSS, JavaScript</td>
                    </tr>
                    <tr>
                        <td>Chuqi Huang</td>
                        <td>De Anza Community College</td>
                        <td>SQL, Prolog, JavaScript</td>
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
                        <td>Francisco Chang</td>
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