//reducer to GET finished book data
const bookReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_BOOK':
            return action.payload;
        default:
            return state;
    }
}; //end bookReducer

export default bookReducer;