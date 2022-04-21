import React, {useEffect, useState}  from "react"; 
import Button from '@mui/material/Button';


function AddExp(props) {
    const [form, setForm] = useState(false);

    function ExpForm(props) {

        if (!props.formClicked) {
            return null;
        }

        return(
            <div>
                <label> Job Title </label>
                    <input type="text"></input><br></br><br></br>
                <label> Company Name </label>
                    <input type="text"></input><br></br><br></br>
                <label> Start Date </label>
                   <input type="month"></input>
                <label> End Date </label>
                    <input type="month"></input> <br></br><br></br>
                <label> Location </label>
                    <input type="text"></input><br></br><br></br>
                <label> Description </label><br></br>
                <textarea name="desc" cols="40" rows="5"></textarea><br></br><br></br>
                <Button variant="contained"> Add </Button><br></br><br></br>
            </div>
        );
    }


    return(
        <div>
            <ExpForm formClicked={form} />
            <Button onClick={() => setForm((prevForm => !prevForm))} variant="outlined"> {form ? 'Cancel' : 'Add Experience Section'} </Button>
        </div>
    );
}

export default AddExp;