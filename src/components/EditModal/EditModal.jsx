import { TextField, Button } from '@mui/material'
import './EditModal.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react'


export default function EditModal({ setEditOpen, movie }) {

    const dispatch = useDispatch();

    const [editInfo, setEditInfo] = useState({ id: movie.id, title: movie.title, description: movie.description })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('sending data to edit: ', editInfo);
        dispatch({ type: 'EDIT_MOVIE', payload: editInfo });
        setEditOpen(false);
    }

    return (
        <form
            className='edit-form'
            onSubmit={handleSubmit}>
            <h3>Edit info for {movie.title}</h3>
            <TextField
                sx={{ marginY: 1 }}
                id='title-edit'
                label='edit title'
                size='small'
                value={editInfo.title}
                onChange={(e) => setEditInfo({ ...editInfo, title: e.target.value })}
            />
            <TextField
                sx={{ marginY: 1 }}
                id='description-edit'
                size='small'
                label='edit description'
                multiline
                value={editInfo.description}
                onChange={(e) => setEditInfo({ ...editInfo, description: e.target.value })}
            />
            <div>
                <Button
                    onClick={() => setEditOpen(false)}
                    color='inherit'
                >
                    cancel</Button>
                <Button
                    type='submit'
                    color='inherit'>save</Button>
            </div>
        </form>

    )
}