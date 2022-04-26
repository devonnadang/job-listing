import React from 'react'
import Chip from '@mui/material/Chip'

function JobTag(props) {
    return (
        <Chip label={props.name} variant="outlined"/>
    )
}

export default JobTag;