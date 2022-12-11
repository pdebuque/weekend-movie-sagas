import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, Collapse, Chip, Box, Modal } from '@mui/material';
import './MovieDetails.css';
import EditModal from '../EditModal/EditModal';
import { modalStyle } from './modalStyle'

export default function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();
    // used for the collapsed description
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false)

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' })
    }, []);

    const movieList = useSelector(store => store.movies);
    console.log('movies: ', movieList);

    // const genres = useSelector(store => store.genres)
    // const getGenres = () => {
    //     console.log('getting the genres of ', movie.title)
    //     dispatch({
    //         type: 'GET_GENRES',
    //         payload: movie.id
    //     })
    // }5

    return (
        <div>
            {movieList
                .filter(movie => movie.id === Number(id))
                .map(movie => {
                    return (
                        <Paper
                            key={movie.id}
                            className="movie-detail-container"
                            elevation={2}
                            sx={{ mt: 1, p: 2, marginX: 'auto', maxWidth: 400 }}
                        >
                            <h2 className="movie-title">{movie.title}</h2>
                            {/* {movie.genres.map(genre => {
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
                                <img src={movie.poster} alt={`${movie.title} poster`} />
                            </Box>
                            <button onClick={() => history.push('/')}>home</button>
                            <button onClick={() => setOpen(!open)}>description</button>
                            <button onClick={() => setEditOpen(true)}>edit</button>

                            <Collapse in={open} >
                                <Box
                                    sx={{ paddingX: 3, mt: 2 }}
                                >
                                    {movie.description}
                                </Box>
                            </Collapse>
                            <Modal
                                open={editOpen}
                            >
                                <Box sx={modalStyle}>

                                    <EditModal
                                        editOpen={editOpen}
                                        setEditOpen={setEditOpen}
                                        movie={movie}
                                    />
                                </Box>
                            </Modal>
                        </Paper>
                    )
                })

            }
        </div >

    )
}