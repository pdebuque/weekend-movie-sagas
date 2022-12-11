import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'
import { Modal, Button, Box, Typography, Grid } from '@mui/material';
import MovieForm from '../MovieForm/MovieForm';
import MovieListItem from '../MovieListItem/MovieListItem';

function MovieList() {

    const [modalOpen, setOpen] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <Typography
                sx={{marginY:1}}
                variant="h3"
            >My movies <Button
                sx={{ p: 0, minWidth: 24 }}
                size='small'
                variant='outlined'
                color='inherit'
                onClick={() => setOpen(true)}
            >+</Button></Typography>

            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieListItem key = {movie.id} movie={movie}/>
                    );
                })}
            </section>
            <Modal open={modalOpen}>
                <MovieForm
                    setOpen={setOpen}
                />
            </Modal>
        </main>

    );
}

export default MovieList;