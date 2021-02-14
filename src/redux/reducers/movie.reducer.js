//reducer to GET finished movie data
const movieReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}; //end movieReducer

export default movieReducer;