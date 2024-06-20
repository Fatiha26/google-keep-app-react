import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = () => {
    return(
        <>
        <div className="note">
            <h1>title</h1>
            <br />
            <p>this is the content</p>
            <DeleteIcon/>
        </div>

        </>
    )
};

export default Note;