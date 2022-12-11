import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, Collapse, Chip, Box } from '@mui/material';
import './MovieDetails.css'

export default function MovieDetails2() {

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

    const { id } = useParams();
    console.log('id: ', id);
    const dispatch = useDispatch();
    const history = useHistory();

    // used for the collapsed description
    const [open, setOpen] = useState(false)

    /* 
    need to:
    - make dispatch to store, with payload of id
    - dispatch finds the title, poster, description, and genres for this movie, stores them in redux store ()
    - this component has useSelector to access that reducer in store
    */

    useEffect(() => {
        getMovie()
    }, []);

    const getMovie = () => {
        console.log('getting the info for this movie');
        dispatch({
            type: 'GET_THIS_MOVIE',
            payload: id
        })
    }

    const thisMovie = useSelector(store => store.thisMovie);
    console.log('this movie: ', thisMovie);

    // const genres = useSelector(store => store.genres)
    // const getGenres = () => {
    //     console.log('getting the genres of ', movie.title)
    //     dispatch({
    //         type: 'GET_GENRES',
    //         payload: movie.id
    //     })
    // }

    return (
        <Paper
            className="movie-detail-container"
            elevation={2}
            sx={{ mt: 1, p: 2, marginX: 'auto', maxWidth: 400 }}
        >
            <h2 className="movie-title">{thisMovie.title}</h2>
            {/* {thisMovie.genres.map(genre => {
                return (
                    <Chip
                        sx={{ marginY: 1, marginX: .5 }}
                        size='small'
                        key={genre.id}
                        label={genre.name} />
                )
            })} */}
            <Box
                className="poster-container"
            >
                <img src={thisMovie.poster} alt={`${thisMovie.title} poster`} />
            </Box>
            <button onClick={() => history.push('/')}>home</button>
            <button onClick={() => setOpen(!open)}>description</button>

            <Collapse in={open} >
                <Box
                    sx={{ paddingX: 3, mt: 2 }}
                >
                    {thisMovie.description}
                </Box>
            </Collapse>
        </Paper>
    )
}