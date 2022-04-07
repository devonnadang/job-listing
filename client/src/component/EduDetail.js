import React from "react"; 

function EduDetail(props) {

    function editingTemp() {
        <div>
            <input type="text" value={props.name} onChange={handleChange}> </input>


            {/* update button */}
            <button onClick={() => updateValue()}> </button>

            {/* cancel button */}
            <button onClick={() => changeEditMode()}> </button>
        </div>
    }

    function normTemp() {
        return (
            <div>
                <button onClick={changeEditMode} variant="outlined"> Edit </button>
                <p> {props.name} </p>
                <p> {props.start} - {props.end} </p>
                <p> {props.major} </p>
                <p> {props.gpa} </p>
                <br></br>
            </div>
        );
    }

    function handleChange(event) {
        
    }

    function changeEditMode() {
        
    }

    function updateValue() {

    }

    return (
        props.isEditing ? editingTemp() : normTemp()
    );
   
}

export default EduDetail;