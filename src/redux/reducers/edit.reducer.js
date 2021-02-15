// reducer to hold single entry object being edited
const editMediaEntry = (state = {}, action) {
    switch (action.type) {
        
        case 'EDIT_TITLE':
            return {...state, title: action.payload};
        case 'EDIT_AUTHOR':
            return {...state, author: action.payload};
        case 'EDIT_YEAR':
            return {...state, year: action.payload};
        case 'EDIT_SEASON':
            return {...state, season: action.payload};
        case 'EDIT_EPISODE':
            return {...state, episode: action.payload};
        case 'EDIT_THOUGHTS':
            return {...state, thoughts: action.payload};
        case 'EDIT_STATUS':
            return {...state, status: action.payload}
        default:
            return state
    }
}; //end editMediaEntry