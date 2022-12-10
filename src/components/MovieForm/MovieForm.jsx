/* 
### 1. Add Movie Form

This should show:

- an input field (for the movie title)
- an input field (for the movie poster image URL))
- a textarea (for the movie description)
- a dropdown (for the genres)

The Add Movie page should have the buttons:

- `Cancel` button, which should bring the user to the Home/List Page
- `Save` button, which should save these inputs in the database and bring the user to the Home/List Page (which now has the new movie)
 
('Adventure'),
('Animated'),
('Biographical'),
('Comedy'),
('Disaster'),
('Drama'),
('Epic'),
('Fantasy'),
('Musical'),
('Romantic'),         --10
('Science Fiction'),  --11
('Space-Opera'),      --12
('Superhero');        --13

*/

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Box, Select, FormControl, InputLabel, MenuItem, TextField} from '@mui/material';

export default function MovieForm({ setOpen }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const addMovie = (e) => {
        e.preventDefault();
        // console.log('in addMovie')
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        history.push('/');
    }

    const [newMovie, setMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    })

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        textAlign: 'center'
    };

    return (
        <Box sx={style}>
            {/* {JSON.stringify(newMovie)} */}
            <h2>add new movie</h2>
            <form onSubmit={addMovie}>
                <Box sx={{marginY:1}}>
                    <TextField
                        size='small'
                        label='title'
                        type="text"
                        name="title-input"
                        id="title-input"
                        value={newMovie.title}
                        onChange={(e) => setMovie({ ...newMovie, title: e.target.value })}
                    />
                </Box>
                <Box sx={{marginY:1}}>
                    <TextField
                        size='small'
                        label='poster url'
                        type="text"
                        name="poster-input"
                        id="poster-input"
                        value={newMovie.poster}
                        onChange={(e) => setMovie({ ...newMovie, poster: e.target.value })}
                    />
                </Box>
                <Box sx={{marginY: 1}}>
                    <TextField
                        name="description-input"
                        id="description-input"
                        size='small'
                        multiline
                        label='description'
                        rows={2}
                        value={newMovie.description}
                        onChange={(e) => setMovie({ ...newMovie, description: e.target.value })}
                    />
                </Box>
                <Box sx={{ width: 150, marginX: 'auto', marginY: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel
                            size='small' id='genre-input-label'>genre</InputLabel>
                        <Select
                            size='small'
                            labelId='genre-input-label'
                            label='genre'
                            id='genre-input'
                            value={newMovie.genre_id}
                            onChange={(e) => setMovie({ ...newMovie, genre_id: e.target.value })}
                        >
                            <MenuItem value=''>--select a genre --</MenuItem>
                            <MenuItem value={1}>Adventure</MenuItem>
                            <MenuItem value={2}>Animated</MenuItem>
                            <MenuItem value={3}>Biographical</MenuItem>
                            <MenuItem value={4}>Comedy</MenuItem>
                            <MenuItem value={5}>Disaster</MenuItem>
                            <MenuItem value={6}>Drama</MenuItem>
                            <MenuItem value={7}>Epic</MenuItem>
                            <MenuItem value={8}>Fantasy</MenuItem>
                            <MenuItem value={9}>Musical</MenuItem>
                            <MenuItem value={10}>Romantic</MenuItem>
                            <MenuItem value={11}>Science Fiction</MenuItem>
                            <MenuItem value={12}>Space-Opera</MenuItem>
                            <MenuItem value={13}>Superhero</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button 
                    sx={{marginX:.5, color: 'grey.900'}}
                    size='small'
                    onClick={() => setOpen(false)}
                    >cancel</Button>
                <Button
                    sx={{marginX:.5, color: 'grey.900'}}
                    size='small'
                    type='submit'>add</Button>
            </form>
        </Box>
    )
}