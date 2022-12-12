// Used to store movies returned from the server
export const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
export const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            // console.log('setting the genres')
            return action.payload;
        default:
            return state;
    }
}
