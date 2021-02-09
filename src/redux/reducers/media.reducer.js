const mediaReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MEDIA':
            return action.payload;
        default:
            return state;
    }
}; //end mediaReducer


export default mediaReducer;