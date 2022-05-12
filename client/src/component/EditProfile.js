import React, {useEffect, useState}  from "react"; 
import {TextField, Button} from '@mui/material'

function EditProfile(props) {

    const isEditing = props.isEditing;
    const [image_url, setImageUrl] = useState(props.image_url)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitEdit(image_url)
    }

    if (isEditing) {
        return (
            <div>
                <form>
                    <TextField size="small" label="Image URL" value={image_url} onChange={(e) => setImageUrl(e.target.value)}></TextField>
                    <Button onClick={handleSubmit}>Submit</Button>
                </form>
            </div>
        )
    } else {
        return (null)
    }
}
export default EditProfile;