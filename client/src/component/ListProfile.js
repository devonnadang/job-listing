import React from "react";
import {Avatar, Stack, Button} from '@mui/material'

function ListProfile(props) {

    const link = "/user/" + props.user_account_id

    return (
        <div>
            <Stack direction="row" justifyContent="space-between" alignItems="Center">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar src={props.image_url} sx={{width: 75, height: 75}}/>
                    <h3>{props.first_name} {props.last_name} </h3>
                </Stack>
                
                <form action={link}>
                    <Button type="submit" variant="outlined">View Profile</Button>
                </form>
            </Stack>
            <br></br>
            
        </div>
    )
}

export default ListProfile;