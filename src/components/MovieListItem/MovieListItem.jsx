import { useHistory } from 'react-router-dom';
import { Paper, Typography, Box } from '@mui/material'
import './MovieListItem.css';
import { useState } from 'react'

export default function MovieListItem({ movie }) {
    const history = useHistory();
    const [textShow, setText] = useState(false);

    const paperStyle = {
        backgroundImage: `url(${movie.poster})`,
        height: 300,
        width: 200,
    }

    return (
        <Box
            sx={{ marginY: 1, marginX: .5 }}
            key={movie.id}
            onClick={() => history.push(`/details/${movie.id}`)}
            onMouseEnter={() => setText(true)}
            onMouseLeave={() => setText(false)}
        >
            <Paper
                className="poster-container"
                elevation={3}
                sx={paperStyle}
            >
                <Box
                    className={textShow ? 'details-container' : 'hidden'}
                    
                >
                    <Typography
                        sx={{ color: 'white' }}
                        className='details-text'
                        variant='h4'
                    >
                        {movie.title}
                    </Typography>
                    <Typography variant = 'body2'>
                        click to see more
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}