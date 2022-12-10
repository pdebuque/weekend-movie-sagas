import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'
import { Modal, Button, Box, Typography } from '@mui/material';
import MovieForm from '../MovieForm/MovieForm'

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
            <h1>MovieList</h1>
            <Button
                variant='outlined'
                color='inherit'
                onClick={() => setOpen(true)}
            >add movie</Button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div
                            key={movie.id}
                            onClick={() => history.push(`/details/${movie.title}`)}
                        >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
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