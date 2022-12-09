import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import {useSelector} from 'react-redux'
import MovieDetails from '../MovieDetails/MovieDetails'

function App() {

    const movies = useSelector(store=>store.movies)

    return (
        <div className="App">
            <h1>The Movies Saga!</h1>
            <Router>
                <Route path="/" exact>
                    <MovieList />
                </Route>
                {movies.map(movie=>{
                    return(
                        <Route key = {movie.id} exact path = {`/details/${movie.title}`}>
                            <MovieDetails movie = {movie}/> 
                        </Route>
                    )
                })}
                {/* Details page */}

                {/* Add Movie page */}
            </Router>
        </div>
    );
}


export default App;
