import { ExpansionPanelActions } from '@material-ui/core';
import bookReducer from './book.reducer';

describe('testing book reducer', () => {
    //SET_BOOK
    test('ACTION SET_BOOK', () => {
        const initialState = [
            {
                title: 'asdf', 
                author: 'asdf'
            }
        ];
        const action = {type: 'SET_USER', payload: [{title: 'asdf', author: 'asdf'}]};

        expect(bookReducer(initialState, action)).toEqual([{title: 'asdf', author: 'asdf'}])
    })
    
    //OTHER_ACTION
    test('ACTION OTHER', () => {
        const initialState = [];
        const action = {type: 'OTHER', payload: []};

        expect(bookReducer(initialState, action)).toEqual(initialState);
    })

})