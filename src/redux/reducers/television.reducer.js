//reducer to GET finished television data
const televisionReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_TV':
            return action.payload;
        default:
            return state;
    }
}; //end televisionReducer

export default televisionReducer;