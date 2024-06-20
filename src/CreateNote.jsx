import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = () => {
    return(
        <>
        <div className="main_note">
            <form action="">
                <input type="text" placeholder='title' />
                <textarea placeholder='write note....'></textarea>
                <Button>
                    <AddIcon/>
                </Button>
            </form>
        </div>
        </>
    )
};

export default CreateNote;