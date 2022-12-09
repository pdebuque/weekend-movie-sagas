const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    // Add query to get all genres
    res.sendStatus(500)
});

router.get('/:id', (req,res)=>{
    // console.log('getting genres for movie id ', req.params.id)
    const queryText = `SELECT movies.title, genres.name FROM movies
                        JOIN movies_genres ON movies_genres.movie_id = movies.id
                        JOIN genres ON genres.id = movies_genres.genre_id
                        WHERE movies.id = $1`
    pool.query(queryText, [req.params.id])
        .then(result=>res.send(result.rows))
        .catch(err=>console.log('could not find genres', err))
})

module.exports = router;