import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import { useSelector } from 'react-redux'
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieForm from '../MovieForm/MovieForm'
import { useState } from 'react';


function App() {


    // const movies = useSelector(store => store.movies)

    return (
        <div className="App">
            <Router>
                <Route path="/" exact>
                    <MovieList />
                </Route>
                <Switch>
                    <Route exact path = '/details/:id' children = {<MovieDetails/>}/>
                </Switch>
                {/* {movies.map(movie => {
                    return (
                        <Route key={movie.id} exact path={`/details/${movie.title}`}>
                            <MovieDetails movie={movie} />
                        </Route>
                    )
                })} */}
                {/* replaced this route with the form modal */}
                {/* <Route exact path='/add'><MovieForm /></Route> */} 
                {/* Details page */}

                {/* Add Movie page */}
            </Router>
        </div>
    );
}


export default App;
