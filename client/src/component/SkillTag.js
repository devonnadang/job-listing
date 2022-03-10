import React from "react"; 
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import Button from '@mui/material/Button';



function SkillTag(props) {
    return (
        <Button  size="small" variant="contained" >
            {props.name} <ClearSharpIcon onClick={() => props.deleteSkill(props.id)}/> <br></br> 
        </Button>
    );
}

export default SkillTag;