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
import { useDispatch } from 'react-redux'

export default function MovieForm() {

    const dispatch = useDispatch();

    const addMovie = (e) => {
        e.preventDefault();
        // console.log('in addMovie')
        dispatch({ type: 'ADD_MOVIE', payload: newMovie })
    }

    const [newMovie, setMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: ''
    })

    return (
        <main>
            {/* {JSON.stringify(newMovie)} */}
            <h2>add new movie</h2>
            <form onSubmit={addMovie}>
                <div>
                    <label htmlFor="title-input">movie title</label>
                    <input
                        type="text"
                        name="title-input"
                        id="title-input"
                        value={newMovie.title}
                        onChange={(e) => setMovie({ ...newMovie, title: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="poster-input">poster url</label>
                    <input
                        type="text"
                        name="poster-input"
                        id="poster-input"
                        value={newMovie.poster}
                        onChange={(e) => setMovie({ ...newMovie, poster: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="description-input">movie description</label>
                    <textarea
                        name="description-input"
                        id="description-input"
                        value={newMovie.description}
                        onChange={(e) => setMovie({ ...newMovie, description: e.target.value })}
                    />
                </div>
                <select
                    name='genre'
                    id='genre-input'
                    value={newMovie.genre_id}
                    onChange={(e) => setMovie({ ...newMovie, genre_id: e.target.value })}
                >
                    <option value=''>--select a genre --</option>
                    <option value='1'>Adventure</option>
                    <option value='2'>Animated</option>
                    <option value='3'>Biographical</option>
                    <option value='4'>Comedy</option>
                    <option value='5'>Disaster</option>
                    <option value='6'>Drama</option>
                    <option value='7'>Epic</option>
                    <option value='8'>Fantasy</option>
                    <option value='9'>Musical</option>
                    <option value='10'>Romantic</option>
                    <option value='11'>Science Fiction</option>
                    <option value='12'>Space-Opera</option>
                    <option value='13'>Superhero</option>
                </select>

                <button type='submit'>add</button>
            </form>
        </main>
    )
}