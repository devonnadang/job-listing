import React from "react"; 
import {DeleteIcon, IconButton} from '@material-ui/core'
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip'

function SkillTag(props) {
    /*
    return (
        <Button size="small" variant="contained" >
            {props.name} <ClearSharpIcon onClick={() => props.deleteSkill(props.id, props.name)}/> <br></br> 
        </Button>
    );
    */
   
   return (
       <Chip color="info" label={props.name} onDelete={() => props.deleteSkill(props.name)}/>
   )
   
}

export default SkillTag;