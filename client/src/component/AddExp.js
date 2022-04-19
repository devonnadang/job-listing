import React, {useEffect, useState}  from "react"; 

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
                <button> Add </button><br></br><br></br>
            </div>
        );
    }


    return(
        <div>
            <ExpForm formClicked={form} />
            <button onClick={() => setForm((prevForm => !prevForm))} variant="outlined"> {form ? 'Cancel' : 'Add Experience Section'} </button>
        </div>
    );
}

export default AddExp;