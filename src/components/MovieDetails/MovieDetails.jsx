import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Paper, Collapse, Chip, Box } from '@mui/material';
import './MovieDetails.css'

export default function MovieDetails({ movie }) {

    /* 
    on this page, we need: title, description, image, and genres.
    
    we already have the title, description, image.
    movie = {
        id: num,
        title: text,
        poster: url,
        description: text
    }
    
    use a dispatch to get the genres for this movie 
    
    */

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)

    const genres = useSelector(store => store.genres)

    const getGenres = () => {
        console.log('getting the genres of ', movie.title)
        dispatch({
            type: 'GET_GENRES',
            payload: movie.id
        })
    }

    useEffect(() => {
        getGenres()
    }, []);

    return (
        <Paper
            className="movie-detail-container"
            elevation={2}
            sx={{ mt: 1, p: 2, marginX: 'auto', maxWidth: 500 }}
        >
            <h2 className="movie-title">{movie.title}</h2>
            {genres.map(genre => {
                return (
                    <Chip
                        sx={{ marginY: 1, marginX: .5 }}
                        size='small'
                        key={genre.id}
                        label={genre.name} />
                )
            })}
            <Box
                className="poster-container"
            >
                <img src={movie.poster} alt={`${movie.title} poster`} />
            </Box>
            <button onClick={() => setOpen(!open)}>see more</button>

            <Collapse in={open} >
                <Box
                    sx={{paddingX: 3, mt: 2}}
                    >
                    {movie.description}
                </Box>
            </Collapse>
        </Paper>
    )
}