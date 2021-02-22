import { ExpansionPanelActions } from '@material-ui/core';
import { TextsmsTwoTone } from '@material-ui/icons';
import podcastReducer from './podcast.reducer';

describe('testing podcast reducer', () => {
    //SET_POD
    test('ACTION SET_POD', () => {
        const initialState = [
            {
                title: 'asdf',
                season: 'asdf',
                episode: 'asdf'
            }
        ];
        const action = {type: 'SET_POD', payload: [{title: 'asdf', season: 'asdf', episode: 'asdf'}]};

        expect(podcastReducer(initialState, action)).toEqual([{title: 'asdf', season: 'asdf', episode: 'asdf'}]);
    })

    //OTHER_ACTION
    test('ACTION OTHER', () => {
        const initialState = [];
        const action = {type: 'OTHER', payload: []};

        expect(podcastReducer(initialState, action)).toEqual(initialState);
    })
})