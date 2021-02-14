//reducer to GET date array
const dateReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_DATE':
            return action.payload;
        default:
            return state;
    }
}; //end dateReducer

export default dateReducer;