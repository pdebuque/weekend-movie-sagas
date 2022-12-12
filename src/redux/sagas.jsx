
import {takeEvery,put} from 'redux-saga/effects'
import axios from 'axios'


export default function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_GENRES', getGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
    yield takeEvery('EDIT_MOVIE', editMovie)
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

function* getGenres(action) {
    try {
        // console.log('getting genres')
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        // console.log('got genres: ', genres.data)
        yield put({ type: 'SET_GENRES', payload: genres.data })
    } catch (err) {
        console.log('get failed')
    }
}

function* addMovie(action) {
    try {
        console.log('adding movie: ', action.payload)
        // need to add movie to the movie table and the genre to the genre database
        yield axios.post('/api/movie', action.payload);

        // to add genre, need the movie id. genre id is in the action payload
    } catch (err) {
        console.log('could not add', err)
    }
}

function* editMovie(action) {
    try{
        console.log('received action:', action.payload)
        yield axios.put(`/api/movie/${action.payload.id}`, action.payload)
        console.log('successfully edited data')
        yield put({type: 'FETCH_MOVIES'})

    } catch(err){console.log('could not edit', err)}
}