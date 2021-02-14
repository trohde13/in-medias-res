//reducer to GET finished podcast data
const podcastReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_POD':
            return action.payload;
        default:
            return state;
    }
}; //end podcastReducer

export default podcastReducer;